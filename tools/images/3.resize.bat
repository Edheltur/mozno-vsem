mogrify.exe -path ./full -resize -quality 75 1200x1200 src/*.jpg
mogrify.exe -path ./medium -resize -quality 75 600x600 src/*.jpg
mogrify.exe -path ./preview -resize -quality 75 300x300 src/*.jpg