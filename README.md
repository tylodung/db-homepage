# davidbrookes.co.uk

[![build status](https://gitlab.com/dbrookes/db-homepage/badges/master/build.svg)](https://gitlab.com/dbrookes/db-homepage/commits/master)
[![coverage report](https://gitlab.com/dbrookes/db-homepage/badges/master/coverage.svg)](https://gitlab.com/dbrookes/db-homepage/commits/master)
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This site is built with Gatsby, a static PWA (Progressive Web App) generator. Gatsby exposes a data source (MarkDown in this case) and allows it to be queried with GraphQL.

Gatsby pre-renders and builds the site as static HTML files, which are deployed to S3 and distributed via CloudFront.

Dynamic functionality such as forms are built with AWS Lambda functions exposed though AWS API Gateway - JAMstack.

## Features

* Mobile first flexbox UI
* Offline support
* WebP images for supported devices
* SVG traced image placeholders for enhanced perceived loading

## Browser Support

* IE11
* Edge 14+
* Chrome
* Safari
* Firefox

## Local Development

`yarn install`

`yarn develop`

The site is available at: `http://localhost:8080`

GraphiQL is available at: `http://localhost:8080/___graphql/`

Changes made locally to React components and styles are hot reloaded to the browser.

To build a static optimised version of the site for production `yarn build`.

## User Interface

The UI makes use React Flexbox grid for layout and custom components are styled with [CSS Modules](https://github.com/css-modules/css-modules).

React Burger Menu provides offcanvas support for small device navigation and Formsy React handles complex form validation patterns.

## Linting

Both ESlint and Stylelint are available, it's recommended that you use the features of your IDE to lint as you go and follow the `eslint-config-airbnb` rule set.

To run the linters on the command line:

`yarn lint`

`yarn lint:js`

`yarn lint:css`

`yarn lint:fix`

## Testing

Testing is powered by Jest and Air BnB's Enzyme test toolkit.

`yarn run test`

Code coverage can be checked with: 

`yarn run test:coverage`

## Continuous Deployment

Continuous deployment is provided by GitLab running an AWS Node.JS Docker image to lint, test, build and deploy the static site to an Amazon S3 bucket, see `.gitlab-ci.yml`.

It's also possible to build and deploy the project to S3 from AWS CodePipeline, see `buildspec.yml`.

Pushing code on the develop branch will run the GitLab CI pipeline and if successful, code will be deployed to the staging bucket with the correct cache headers.

The most recent copy of the site is then pushed to each CloudFront edge location for optimal performance around the world.

## Contact Form

The contact form runs a Node Lambda function which fetches a HTML email template from the S3 bucket, populates it with the post data from AWS API Gateway and sends the email notification via Amazon SES.
