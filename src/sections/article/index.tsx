import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

import ArticleCardContentBasic from "@components/content/articleCardContentBasic";
import ArticleCardContentNested from "@components/content/articleCardContentNested";
import { ArticleProps } from "./types";

const Article = ({
  title,
  published_date,
  id,
  uri,
  url,
  asset_id,
  source,
  updated,
  section,
  subsection,
  nytdsection,
  adx_keywords,
  column,
  byline,
  type,
  abstract,
  des_facet,
  org_facet,
  per_facet,
  media,
  eta_id,
}: ArticleProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <span className="ml-1">{published_date}</span>
          <BiChevronDown size={20} className={`${isOpen && "rotate-180"}`} />
        </button>
      </h6>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <ArticleCardContentBasic label="Id" value={id} />
        <ArticleCardContentBasic label="Uri" value={uri} />
        <ArticleCardContentBasic label="Url" value={url} />
        <ArticleCardContentBasic label="Asset Id" value={asset_id} />
        <ArticleCardContentBasic label="Source" value={source} />
        <ArticleCardContentBasic label="Updated" value={updated} />
        <ArticleCardContentBasic label="Section" value={section} />
        <ArticleCardContentBasic label="Subsection" value={subsection} />
        <ArticleCardContentBasic label="NYDT Section" value={nytdsection} />
        <ArticleCardContentBasic label="Adx Keywords" value={adx_keywords} />
        <ArticleCardContentBasic label="Column" value={column} />
        <ArticleCardContentBasic label="Byline" value={byline} />
        <ArticleCardContentBasic label="Type" value={type} />
        <ArticleCardContentBasic label="Abstract" value={abstract} />
        <ArticleCardContentNested label="DES Facet" options={des_facet} />
        <ArticleCardContentNested label="ORG Facet" options={org_facet} />
        <ArticleCardContentNested label="PER Facet" options={per_facet} />
        <div className="p-4 text-left text-sm leading-normal text-blue-gray-500/80">
          Media:
          {media?.map((option, index) => (
            <div key={index}>
              <p>{option?.type}</p>
              <p>{option?.subtype}</p>
              <p>{option?.caption}</p>
              <p>{option?.copyright}</p>
              <p>{option?.approved_for_syndication}</p>
              <div>
                Media Metadata:{" "}
                {option?.["media-metadata"]?.map((mediaItem, index) => (
                  <React.Fragment key={index}>
                    <p>
                      Url: <img src={mediaItem?.url} alt="media-img-alt"></img>
                    </p>
                    <p>Format: {mediaItem?.format}</p>
                    <p>Height: {mediaItem?.height}</p>
                    <p>Width: {mediaItem?.width}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ArticleCardContentBasic label="Eta Id" value={eta_id} />
      </div>
    </div>
  );
};

export default Article;
