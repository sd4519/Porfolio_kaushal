"""Render selected user-supplied portfolio artwork without altering its design.

Requires PyMuPDF. Usage: python scripts/extract-service-artwork.py
The PDFs stay outside the public website; only selected artwork is exported.
"""
from pathlib import Path
import json
import pymupdf

downloads = Path.home() / 'Downloads'
output = Path(__file__).resolve().parents[1] / 'public' / 'images' / 'services'
selections = [
    ('identity', 'portfolio_kaushal.pdf', 5, None, 'NorthForge brand applications'),
    ('packaging', 'portfolio_kaushal.pdf', 3, (545, 432, 847, 755), 'Archive Cafe pastry packaging'),
    ('website', 'portfolio_kaushal.pdf', 16, (65, 100, 1325, 850), 'Feltrom website design'),
    ('social', 'Personal Portfolio.pdf', 7, None, 'Yash Realty social creatives'),
    ('marketing', 'portfolio_kaushal.pdf', 12, (70, 95, 1330, 655), 'Noventix Global campaign creatives'),
    ('print', 'Personal Portfolio.pdf', 10, None, 'The Gawarvala Foundation stationery'),
    ('interface', 'portfolio_kaushal.pdf', 7, (36, 380, 1027, 755), 'Feltrom website interface layouts'),
]
output.mkdir(parents=True, exist_ok=True)
manifest = []
for kind, filename, number, crop, label in selections:
    with pymupdf.open(downloads / filename) as document:
        page = document[number - 1]
        bounds = pymupdf.Rect(crop) if crop else page.rect
        scale = 1400 / max(bounds.width, bounds.height)
        pixmap = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), clip=bounds, alpha=False)
        target = output / f'{kind}-portfolio.jpg'
        pixmap.save(target, jpg_quality=92)
        manifest.append(dict(service=kind, file=target.name, source=filename, page=number, crop=crop, label=label))
(output / 'portfolio-sources.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(f'Exported {len(manifest)} portfolio images.')
