const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/sslee/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
 const root=__dirname;
 const keys=process.argv.slice(2);
 const candidates=JSON.parse(fs.readFileSync(path.join(root,'candidates.json'),'utf8'));
 const data=JSON.parse(fs.readFileSync(path.join(root,'downloads.json'),'utf8')).filter(x=>x.file && (!keys.length || (keys.includes(x.key) && candidates.find(c=>c.key===x.key)?.candidates.some(c=>c.url===x.url))));
 for(let start=0;start<data.length;start+=36){
  const group=data.slice(start,start+36), layers=[];
  for(let i=0;i<group.length;i++){
   const a=group[i], x=i%4*250,y=Math.floor(i/4)*130;
   try {
    const png=await sharp(a.file,{density:120}).resize(220,90,{fit:'inside',withoutEnlargement:true}).png().toBuffer();
    const m=await sharp(png).metadata();
    layers.push({input:png,left:x+Math.round((250-m.width)/2),top:y+28});
   }catch(e){console.log(a.key,a.index,e.message.slice(0,80));}
   const label=`${a.key} [${a.index}]`;
   layers.push({input:Buffer.from(`<svg width="250" height="25"><text x="8" y="18" font-size="13" font-family="Arial">${label}</text></svg>`),left:x,top:y});
  }
  await sharp({create:{width:1000,height:Math.ceil(group.length/4)*130,channels:4,background:'#eeeeee'}}).composite(layers).jpeg().toFile(path.join(root,`${keys.length?'focus':'candidates'}-${Math.floor(start/36)+1}.jpg`));
 }
 console.log('sheets',Math.ceil(data.length/36));
})();
