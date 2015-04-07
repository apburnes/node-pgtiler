node-pgtiler
============

Create map vector tile for PostGIS

## Load Data
`ogr2ogr -f "PostgreSQL" -a_srs EPSG:900913 PG:"dbname=pgtiles user=postgres password=password" test/fixtures/world_merc.converted.geojson`

Andy B
