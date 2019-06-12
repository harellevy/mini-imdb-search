# MiniImdb

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

# this project runs on
- node 10.9 +
- angular 8
- nx (angular cli (wrapper) on steroids)

# about this project
this is experimental project i did for a test.

- app architecture
- built over nx and angular 8, Ivy is currently supporting ngx-headroom
- scss, bootstrap, infinite-scroll, angular material (select dropdown), cdk for portal (for future pages with different header behavior) as dependencies (except for angular)  

# features
- result page (now without router, there are no other routes currently)
- headroom header (fixed and comes back when scroll up)
- responsive movie search results
- movie type badges
- year filters (year selector, takes 150 years back, dropdown backwards years)
- error messages and guides
- image fallback (if image is N/A or if 404 arrived from img location)
- search types - for api params, api result
- convert params for jsonp and get request for angular, takes a json and returns the object angular wants for params.

Notes: Couldn't find api request for finding people.
