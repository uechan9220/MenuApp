import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.4);
  padding: 16px;
`;
const LeftContent = styled.View`
  flex: 0 1 60px;
  width: 300px;
`;
const RightContent = styled.View`
  flex: 0 1 auto;
  margin-left: 6px;
  width: 100%;
`;

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 90px;
`;
const ImageContainer = styled.View``;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;
const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
const UserId = styled.Text`
  color: rgb(101, 119, 134);
  margin-left: 8px;
  font-size: 16px;
`;
const Detail = styled.Text`
  font-size: 16px;
  line-height: 18px;
  min-width: 0px;
  margin-bottom: 4px;
`;

const ContentImage = styled.Image`
  min-height: 200px;
  width: 100%;
  border-radius: 16px;
`;

const TimeLineContent: React.FC = ({item, navigation}) => {
  console.log(item.image);

  return (
    <Container
      onPress={() =>
        navigation.navigate('Detail', {
          item,
        })
      }>
      <LeftContent>
        <ImageContainer>
          <UserImage
            source={{
              uri: `${item.userIcon}`,
            }}
          />
        </ImageContainer>
      </LeftContent>
      <RightContent>
        <InfoContainer>
          <Name>{item.userName}</Name>
          <UserId>@{item.userId}</UserId>
        </InfoContainer>
        <Detail>{item.detail}</Detail>
        <ContentImage
          source={{
            uri: `${item.image}`,
          }}
        />
      </RightContent>
    </Container>
  );
};

export default TimeLineContent;