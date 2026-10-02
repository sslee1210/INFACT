param([string]$Url, [string]$OutputPath)
$ErrorActionPreference = 'Stop'
$r = Invoke-WebRequest -Uri $Url -OutFile $OutputPath -PassThru -TimeoutSec 18 -UserAgent 'Mozilla/5.0'
$finalUrl = $r.BaseResponse.RequestMessage.RequestUri.AbsoluteUri
if (-not $finalUrl) { $finalUrl = $r.BaseResponse.ResponseUri.AbsoluteUri }
@{url=$finalUrl;status=[int]$r.StatusCode;contentType=$r.Headers['Content-Type']} | ConvertTo-Json -Compress
