// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import portfolioSection from './portfolioSectionSchema'
import portfolioCard from './portfolioCardSchema'
import shortFilm from './creativeShortFilmSchema'
import featureFilm from './creativeFeatureFilmSchema'
import fiction from './creativeFictionSchema'
import stageplays from './creativeStageplaysSchema'
import headlineText from '../schemas/indexSchema'
import homecards from './homeCardsSchema'
import crocodiles from './crocodilesSchema'
import bio from './bioSchema'
import brandlogos from './brandLogoSchema'
import pdfDownloadsSchema from './pdfDownloadsSchema'
import creativeSubheadSchema from './creativeSubheadSchema'
import pragerSchema from './pragerSchema'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    headlineText,
    homecards,
    portfolioSection,
    portfolioCard,
    shortFilm,
    featureFilm,
    fiction,
    stageplays,
    crocodiles,
    bio,
    brandlogos,
    pdfDownloadsSchema,
    creativeSubheadSchema,
    pragerSchema
  ]),
})
