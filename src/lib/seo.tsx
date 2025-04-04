import { Helmet } from 'react-helmet-async';

const Seo = ({ title="", description, canonical = "", image="/assets/images/logo-instituto-maos-de-ouro.png", schemaMarkup }) => (
  <Helmet defaultTitle='Instituto Mãos de Ouro - As Mãos Que Transformam Vidas' prioritizeSeoTags titleTemplate={title ? `%s | Instituto Mãos de Ouro - As Mãos Que Transformam Vidas` : undefined}>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title || "Instituto Mãos de Ouro - As Mãos Que Transformam Vidas"} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:title" content={title || "Instituto Mãos de Ouro - As Mãos Que Transformam Vidas"} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {schemaMarkup && (
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    )}
  </Helmet>
);

export default Seo;