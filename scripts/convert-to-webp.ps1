# Image WebP Conversion Script
# Converts JPG/PNG images to WebP format for better performance

Write-Host "=== WebP Image Conversion ===" -ForegroundColor Cyan
Write-Host ""

# Check if we have images to convert
$images = Get-ChildItem "public\assets" -Include *.jpg, *.jpeg, *.png -Recurse

if ($images.Count -eq 0) {
    Write-Host "No images found to convert" -ForegroundColor Yellow
    exit
}

Write-Host "Found $($images.Count) images to convert" -ForegroundColor Green
Write-Host ""

# Try to find FFmpeg
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
    Write-Host "FFmpeg not found. Please use an online converter:" -ForegroundColor Yellow
    Write-Host "1. Go to https://cloudconvert.com/jpg-to-webp" -ForegroundColor Cyan
    Write-Host "2. Upload your images from public\assets\" -ForegroundColor Cyan
    Write-Host "3. Download WebP files and place them back in public\assets\" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Images to convert:" -ForegroundColor Yellow
    $images | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }
    exit
}

# Convert each image
$totalSaved = 0
foreach ($image in $images) {
    $originalSize = $image.Length / 1KB
    $webpPath = $image.FullName -replace '\.(jpg|jpeg|png)$', '.webp'
    
    Write-Host "Converting: $($image.Name)..." -ForegroundColor Yellow
    
    # Convert to WebP with quality 85
    & $ffmpegPath -i $image.FullName -c:v libwebp -quality 85 $webpPath -y 2>&1 | Out-Null
    
    if (Test-Path $webpPath) {
        $webpSize = (Get-Item $webpPath).Length / 1KB
        $saved = $originalSize - $webpSize
        $percent = [math]::Round(($saved / $originalSize) * 100, 1)
        
        Write-Host "  ✓ Original: $([math]::Round($originalSize, 0)) KB" -ForegroundColor Cyan
        Write-Host "  ✓ WebP: $([math]::Round($webpSize, 0)) KB" -ForegroundColor Green
        Write-Host "  ✓ Saved: $([math]::Round($saved, 0)) KB ($percent%)" -ForegroundColor Green
        Write-Host ""
        
        $totalSaved += $saved
    }
    else {
        Write-Host "  ✗ Failed to convert" -ForegroundColor Red
    }
}

Write-Host "=== Conversion Complete ===" -ForegroundColor Cyan
Write-Host "Total saved: $([math]::Round($totalSaved, 0)) KB" -ForegroundColor Green
Write-Host ""
Write-Host "Next step: Update image references in your code to use .webp files" -ForegroundColor Yellow
