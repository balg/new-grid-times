import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
        <HorizontalDivider />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <Story as={SecondaryStory} key={story.id} {...story} />
          ))}
        </StoryList>
        <SecondaryStoryDivider />
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <StyledOpinionStory as={OpinionStory} key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
        <AdvertisementDivider />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    gap: 48px 32px;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 386px 273px;
    gap: 32px;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  position: relative;
`;

const HorizontalDivider = styled.div`
  display: none;
  background-color: ${COLORS.gray[300]};
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0px;
  right: -16px;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const SecondaryStoryDivider = styled(HorizontalDivider)`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const AdvertisementDivider = styled(SecondaryStoryDivider)`
  width: 100%;
  height: 1px;
  right: revert;
  top: -16px;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  position: relative;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 16px;
  }
`;

const Story = styled.div`
  padding: 16px 0px;
  border-top: 1px solid ${COLORS.gray[300]};

  &:first-child {
    padding-top: 0px;
    border: none;
  }

  &:last-child {
    padding-bottom: 0px;
  }
`;

const StyledOpinionStory = styled(Story)`
  @media ${QUERIES.tabletOnly} {
    padding: 0px;
    border: none;
    flex: 1;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  position: relative;
`;

export default MainStoryGrid;
