import Head from "next/head";

interface TMetadataProps {
  title: string;
  description: string;
  image?: string;
}

export const Metadata: React.FC<TMetadataProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
};
