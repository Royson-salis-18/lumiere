import urllib.request
import re

urls = [
    'https://unsplash.com/s/photos/jewelry',
    'https://unsplash.com/s/photos/necklace',
    'https://unsplash.com/s/photos/ring',
    'https://unsplash.com/s/photos/bracelet',
    'https://unsplash.com/s/photos/earrings',
    'https://unsplash.com/s/photos/diamonds',
    'https://unsplash.com/s/photos/luxury'
]

photo_ids = set()
for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        matches = re.findall(r'href="/photos/([a-zA-Z0-9\-]+)"', html)
        for m in matches:
            if len(m) > 10: # likely an ID or slug
                photo_ids.add(m)
    except Exception as e:
        print("Error:", e)

# Unsplash redirects slugs to photos if you just use https://source.unsplash.com/{id} or images.unsplash.com
print(list(photo_ids)[:40])
