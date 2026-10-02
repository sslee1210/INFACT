import requests, subprocess, tempfile, json, shutil
from pathlib import Path

def get(url, **kwargs):
    try:
        return requests.get(url, **kwargs)
    except requests.exceptions.SSLError:
        # Windows verifies the same TLS endpoint using its system trust store.
        # Never disable certificate validation.
        with tempfile.TemporaryDirectory(prefix='infact-logo-') as directory:
            output=Path(directory)/'response.bin'
            shell=shutil.which('pwsh') or shutil.which('powershell')
            result=subprocess.run([shell,'-NoProfile','-File',str(Path(__file__).with_name('windows-fetch.ps1')),url,str(output)],capture_output=True,timeout=25)
            if result.returncode: raise requests.exceptions.SSLError('Windows certificate verification or request failed')
            meta=json.loads(result.stdout.decode('utf-8-sig'))
            response=requests.Response()
            response.status_code=meta['status']
            response.url=meta['url'] or url
            response._content=output.read_bytes()
            response.headers['Content-Type']=str(meta.get('contentType',''))
            return response
