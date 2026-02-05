$files = @(
    "app\about\page.tsx",
    "app\contact\page.tsx",
    "app\privacy-policy\page.tsx",
    "app\whatsapp\page.tsx"
)

foreach ($file in $files) {
    Write-Host "Processing $file..."
    $content = Get-Content $file -Raw
    
    # Remove all box backgrounds and borders
    $content = $content -replace 'bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10', 'mb-12'
    $content = $content -replace 'bg-gradient-to-br from-[\w-]+/\d+ to-[\w-]+/\d+ backdrop-blur-lg rounded-2xl p-8 border border-[\w-]+/\d+', 'mb-12'
    $content = $content -replace 'bg-gradient-to-r from-[\w-]+/\d+ to-[\w-]+/\d+ backdrop-blur-lg rounded-2xl p-8 border border-[\w-]+/\d+', 'mb-12'
    $content = $content -replace 'bg-[\w-]+/\d+ border border-[\w-]+/\d+ rounded-lg p-6', 'p-6'
    $content = $content -replace 'bg-white/10 rounded-lg p-6', 'p-6'
    $content = $content -replace 'bg-white/5 p-6 rounded-lg border border-white/10', 'p-6'
    $content = $content -replace 'bg-white/5 p-5 rounded-lg border border-white/10', 'p-5'
    $content = $content -replace 'bg-white/5 p-4 rounded-lg', 'p-4'
    $content = $content -replace 'bg-black/30 p-4 rounded border border-[\w-]+/\d+', 'p-4'
    $content = $content -replace 'bg-black/30 p-3 rounded border border-[\w-]+/\d+', 'p-3'
    
    Set-Content $file -Value $content
    Write-Host "Completed $file"
}

Write-Host "All files processed!"
