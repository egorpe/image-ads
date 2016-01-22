# image-ads

The prototype code for image overlay ads.

Based on jQuery.

Scans the webpage for images wider and taller than a certain threshlod.

Then it wraps the image into a layer of 728px wide for high resolution and
468px wide for smaller resolution.

Then it puts an overlay ad on top of an image.

There are two ad formats:
 * 728x90
 * 468x60

If the image is wider that 728px, the wide ad is displayed. Otherwise, the small ad is displayed. If the image width go under 468px, the overlay disappears.

The code is designed to put ads on the first and last matching image on the page.

This is really very rough hack for my own gallery sites. Feel free to adapt to your own needs.
