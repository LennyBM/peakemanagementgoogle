# Hero Video Compression Script - Fixed Version
# Compresses hero-video.mp4 from ~1.4MB to <500KB

$inputVideo = "public\assets\hero-video.mp4"
$outputVideo = "public\assets\hero-video-compressed.mp4"
$backupVideo = "public\assets\hero-video-original.mp4"

# Check if input exists
if (-not (Test-Path $inputVideo)) {
    Write-Host "Error: hero-video.mp4 not found" -ForegroundColor Red
    exit
}

# Get original size
$originalSize = (Get-Item $inputVideo).Length / 1MB
Write-Host "Original size: $([math]::Round($originalSize, 2)) MB" -ForegroundColor Cyan

# Backup original
Write-Host "Creating backup..." -ForegroundColor Yellow
Copy-Item $inputVideo $backupVideo -Force

# Compress video
Write-Host "Compressing video (this may take a minute)..." -ForegroundColor Yellow

# Try multiple possible FFmpeg locations
$ffmpegPaths = @(
    "C:\Program Files\FFmpeg\bin\ffmpeg.exe",
    "C:\ProgramData\chocolatey\bin\ffmpeg.exe",
    "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-7.1.1-full_build\bin\ffmpeg.exe"
)

$ffmpegPath = $null
foreach ($path in $ffmpegPaths) {
    if (Test-Path $path) {
        $ffmpegPath = $path
        Write-Host "Found FFmpeg at: $path" -ForegroundColor Green
        break
    }
}

if (-not $ffmpegPath) {
    Write-Host "Error: FFmpeg not found. Please install FFmpeg." -ForegroundColor Red
    exit
}

# Run FFmpeg compression
& $ffmpegPath -i $inputVideo -vcodec libx264 -crf 28 -preset slow -vf "scale=1280:-2" -movflags +faststart -an $outputVideo -y 2>&1 | Out-Null

# Check result
if (Test-Path $outputVideo) {
    $compressedSize = (Get-Item $outputVideo).Length / 1MB
    $compressionRatio = [math]::Round((1 - ($compressedSize / $originalSize)) * 100, 1)
    
    Write-Host "`nSuccess!" -ForegroundColor Green
    Write-Host "Original: $([math]::Round($originalSize, 2)) MB" -ForegroundColor Cyan
    Write-Host "Compressed: $([math]::Round($compressedSize, 2)) MB" -ForegroundColor Cyan
    Write-Host "Saved: $compressionRatio%" -ForegroundColor Green
    
    # Replace original
    Move-Item $outputVideo $inputVideo -Force
    Write-Host "`nVideo replaced! Original backed up to hero-video-original.mp4" -ForegroundColor Green
}
else {
    Write-Host "Error: Compression failed" -ForegroundColor Red
}
