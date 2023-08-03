import React from "react";
import HomeAbout from "../Sections/HomeAbout";
import HomeAboutV2 from "../Sections/HomeAbout/HomeAboutV2";
import HomeGallery from "../Sections/HomeGallery";
import HomeBlog from "../Sections/HomeBlog";
import HomeCommunity from "../Sections/HomeCommunity";
import HomeFindUs from "../Sections/HomeFindUs";
import HomeJoinUs from "../Sections/HomeJoinUs";
import HomeHeroNew from "../Sections/HomeHeroNew";
import HomeAboutV2New from "../Sections/HomeAboutV2New/HomeAboutV2New";
import HomeJoinCommunity from "../Sections/HomeJoinCommunity/HomeJoinCommunity";
import HomeGalleryNew from "../Sections/HomeGalleryNew";
import HomeBlogNew from "../Sections/HomeBlogNew";
import HomeJoinCommunityNew from "../Sections/HomeJoinCommunityNew/HomeJoinCommunityNew";
import { Container } from "@mui/system";

const HomeNew = () => {
  return (
    <>
      <HomeHeroNew />
      <HomeAboutV2New />
      <HomeGalleryNew />
      <HomeFindUs />
    </>
  );
};

export default HomeNew;
