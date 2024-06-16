import { useState } from "react";

import Dropdown from "@components/buttons/dropdown";
import { Article } from "@sections";
import { ArticleProps } from "@sections/article/types";
import { FEED_TITLE, FEED_SUBTITLE, DAY_OPTIONS } from "@constants";

const mostPopularArticlesMockData = {
  status: "OK",
  copyright:
    "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
  num_results: 20,
  results: [
    {
      uri: "nyt://article/702fce7e-357d-59c1-9c5f-83ad26a487af",
      url: "https://www.nytimes.com/2024/06/15/world/europe/will-lewis-records-uk-editor.html",
      id: 100000009522212,
      asset_id: 100000009522212,
      source: "New York Times",
      published_date: "2024-06-15",
      updated: "2024-06-16 12:01:30",
      section: "World",
      subsection: "Europe",
      nytdsection: "world",
      adx_keywords:
        "Newspapers;News and News Media;Wiretapping and Other Eavesdropping Devices and Methods;Detectives (Private);Ethics and Official Misconduct;Lewis, William (1969- );Winnett, Robert;Washington Post;Sunday Times (British Newspaper);Great Britain",
      column: null,
      byline: "By Justin Scheck and Jo Becker",
      type: "Article",
      title:
        "Washington Post Publisher and Incoming Editor Are Said to Have Used Stolen Records in Britain",
      abstract:
        "Years before becoming The Post’s publisher, Will Lewis assigned an article based on stolen phone records, a former reporter said.",
      des_facet: [
        "Newspapers",
        "News and News Media",
        "Wiretapping and Other Eavesdropping Devices and Methods",
        "Detectives (Private)",
        "Ethics and Official Misconduct",
      ],
      org_facet: ["Washington Post", "Sunday Times (British Newspaper)"],
      per_facet: ["Lewis, William (1969- )", "Winnett, Robert"],
      geo_facet: ["Great Britain"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Will Lewis has maintained that his only involvement in the 2000s hacking scandal was his effort to help root out problematic behavior after the fact.",
          copyright: "Carlotta Cardana/Bloomberg",
          approved_for_syndication: 0,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2024/06/15/world/15wapo-publisher-top-01/15wapo-publisher-top-01-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/15/world/15wapo-publisher-top-01/15wapo-publisher-top-01-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/15/world/15wapo-publisher-top-01/15wapo-publisher-top-01-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/2df51231-8de9-59e4-9c6d-a16449bea3dc",
      url: "https://www.nytimes.com/2024/06/15/business/faa-sues-passenger-american-airlines.html",
      id: 100000009523534,
      asset_id: 100000009523534,
      source: "New York Times",
      published_date: "2024-06-15",
      updated: "2024-06-16 09:38:43",
      section: "Business",
      subsection: "",
      nytdsection: "business",
      adx_keywords:
        "Assaults;Flight Attendants;Aviation Accidents, Safety and Disasters;Fines (Penalties);Heather Wells;American Airlines;Federal Aviation Administration",
      column: null,
      byline: "By Remy Tumin",
      type: "Article",
      title:
        "Unruly Passenger Who Was Restrained With Duct Tape Faces Record Fine",
      abstract:
        "Federal regulators are seeking $81,950 from a Texas woman who acted erratically and was violent toward crew members during an American Airlines flight in 2021.",
      des_facet: [
        "Assaults",
        "Flight Attendants",
        "Aviation Accidents, Safety and Disasters",
        "Fines (Penalties)",
      ],
      org_facet: ["American Airlines", "Federal Aviation Administration"],
      per_facet: ["Heather Wells"],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "American Airlines planes at Washington National Airport in Arlington, Va., in 2021. A Texas passenger is being sued by the Federal Aviation Administration over disruptions she caused during a flight.",
          copyright: "Erin Schaff/The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2024/06/15/multimedia/15xp-passenger-zbph/15xp-passenger-zbph-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/15/multimedia/15xp-passenger-zbph/15xp-passenger-zbph-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/15/multimedia/15xp-passenger-zbph/15xp-passenger-zbph-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/96c2a120-9824-57cb-bc87-86609b0e3086",
      url: "https://www.nytimes.com/2024/06/14/us/anti-abortion-supreme-court-southern-baptists.html",
      id: 100000009457772,
      asset_id: 100000009457772,
      source: "New York Times",
      published_date: "2024-06-14",
      updated: "2024-06-15 09:44:27",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Abortion;Conservatism (US Politics);Presidential Election of 2024;State Legislatures;Law and Legislation;Polls and Public Opinion;In Vitro Fertilization;Midterm Elections (2022);Abortion Drugs;Roe v Wade (Supreme Court Decision);Dannenfelser, Marjorie;Center for Arizona Policy;Ohio Right to Life;Pew Research Center;Southern Baptist Convention;Arizona;Florida;Ohio",
      column: null,
      byline: "By Elizabeth Dias",
      type: "Article",
      title:
        "One Week That Revealed the Struggles of the Anti-Abortion Movement",
      abstract:
        "The movement looks for a path forward: “Is the goal the absolute abolition of abortion in our nation?”",
      des_facet: [
        "Abortion",
        "Conservatism (US Politics)",
        "Presidential Election of 2024",
        "State Legislatures",
        "Law and Legislation",
        "Polls and Public Opinion",
        "In Vitro Fertilization",
        "Midterm Elections (2022)",
        "Abortion Drugs",
        "Roe v Wade (Supreme Court Decision)",
      ],
      org_facet: [
        "Center for Arizona Policy",
        "Ohio Right to Life",
        "Pew Research Center",
        "Southern Baptist Convention",
      ],
      per_facet: ["Dannenfelser, Marjorie"],
      geo_facet: ["Arizona", "Florida", "Ohio"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Despite the signal victory of overturning Roe v. Wade, the anti-abortion movement is struggling to agree on a common agenda.",
          copyright: "Eric Lee/The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2024/06/14/multimedia/14NAT-ABORTION-POLITICS-01-jwmk/14NAT-ABORTION-POLITICS-01-jwmk-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/14/multimedia/14NAT-ABORTION-POLITICS-01-jwmk/14NAT-ABORTION-POLITICS-01-jwmk-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2024/06/14/multimedia/14NAT-ABORTION-POLITICS-01-jwmk/14NAT-ABORTION-POLITICS-01-jwmk-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
  ],
};

const Feed = (): JSX.Element => {
  const [period, setPeriod] = useState<number>(DAY_OPTIONS[0]);

  const mostPopularArticles = mostPopularArticlesMockData.results;

  // const getMostPopularArticles = async () => {
  //   fetchMostPopularArticles(period)
  //     .then((response) => {
  //       const data = response?.data?.results; // Access data from the response object
  //       if (data) {
  //         setMostPopularArticles(data);
  //       } else {
  //         console.error("Error: No data received from API");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching project list:", err);
  //     });
  // };

  // useEffect(() => {
  //   getMostPopularArticles();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [period]);

  return (
    <div className="flex flex-col items-center">
      <h1
        data-testid="feed-title"
        className="text-4xl font-bold tracking-tight mb-8"
      >
        {FEED_TITLE}
      </h1>
      <h4 data-testid="feed-subtitle">{FEED_SUBTITLE}</h4>
      <Dropdown
        options={DAY_OPTIONS}
        selectedOption={period}
        handleSelectedChange={(val) => setPeriod(val)}
      />
      <hr data-testid="feed-divider" className="my-1 w-full" />
      <div data-testid="feed-articles-list">
        {/* @ts-ignore */}
        {mostPopularArticles?.map((item: ArticleProps, index) => (
          <Article
            key={index}
            title={item?.title}
            published_date={item?.published_date}
            id={item?.id}
            uri={item?.uri}
            url={item?.url}
            asset_id={item?.asset_id}
            source={item?.source}
            updated={item?.updated}
            section={item?.section}
            subsection={item?.subsection}
            nytdsection={item?.nytdsection}
            adx_keywords={item?.adx_keywords}
            column={item?.column}
            byline={item.byline}
            type={item?.type}
            abstract={item?.abstract}
            des_facet={item?.des_facet}
            org_facet={item?.org_facet}
            per_facet={item?.per_facet}
            media={item?.media}
            eta_id={item?.eta_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
