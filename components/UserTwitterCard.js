import React from "react";
// import {
//   Card,
//   Avatar,
//   Row,
//   Col,
//   Text,
//   Button,
//   Spacer,
//   Grid,
// } from "@nextui-org/react";
import Image from "next/image";
import { Images } from "../components/images";

export const UserTwitterCard = ({
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {
  const [following, setFollowing] = React.useState(false);

  return (
    // <Grid.Container
    //   className="user-twitter-card__container"
    //   css={{
    //     mw: "250px",
    //     borderRadius: "$lg",
    //     padding: "$sm",
    //     ...css,
    //   }}
    //   onClick={onClick}
    //   {...props}
    // >
    //   <Row justify="space-between" align="center">
    //     <Col span={3}>
    //       <Avatar
    //         size="lg"
    //         src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    //         color="gradient"
    //         bordered
    //         squared
    //         {...avatarProps}
    //       />
    //     </Col>
    //     <Col span={9}>
    //       <Row>
    //         <Grid xs={12} direction="column">
    //           <Text className="user-twitter-card__text" b size={15}>
    //             Zoey Lang
    //           </Text>
    //           <Text
    //             className="user-twitter-card__text"
    //             size={14}
    //             css={{ mt: "-$3" }}
    //             color="#888888"
    //           >
    //             @zoeylang
    //           </Text>
    //         </Grid>
    //         <Button
    //           auto
    //           rounded
    //           onPress={() => setFollowing(!following)}
    //           css={{
    //             maxHeight: "$space$12",
    //             fs: "$xs",
    //             fontWeight: "$semibold",
    //             borderColor: following ? "$foreground" : "$primary",
    //             color: following ? "$foreground" : "$white",
    //           }}
    //           color="primary"
    //           bordered={following}
    //         >
    //           {following ? "Unfollow" : "Follow"}
    //         </Button>
    //       </Row>
    //     </Col>
    //   </Row>
    //   <Grid.Container className="user-twitter-card__username-container">
    //     <Grid xs={12}>
    //       <Text
    //         className="user-twitter-card__text"
    //         size={14}
    //         css={{ mt: "$1" }}
    //         color="#888888"
    //       >
    //         Full-stack developer, @getnextui lover she/her 🎉
    //       </Text>
    //     </Grid>
    //   </Grid.Container>

    //   <Grid.Container
    //     className="user-twitter-card__metrics-container"
    //     justify="flex-start"
    //     alignContent="center"
    //   >
    //     <Text className="user-twitter-card__text" size={14} color="#888888">
    //       <Text
    //         b
    //         color="foreground"
    //         className="user-twitter-card__text"
    //         size={14}
    //         css={{ mr: "$1" }}
    //       >
    //         4
    //       </Text>
    //       Following
    //     </Text>
    //     <Spacer inline x={0.5} />
    //     <Text className="user-twitter-card__text" size={14} color="#888888">
    //       <Text
    //         b
    //         color="foreground"
    //         className="user-twitter-card__text"
    //         size={14}
    //         css={{ mr: "$1" }}
    //       >
    //         97.1K
    //       </Text>
    //       Followers
    //     </Text>
    //   </Grid.Container>
    // </Grid.Container>
    // <Card css={{ w: "100%", h: "400px" }}>
    //   <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    //     <Col>
    //       <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
    //         New
    //       </Text>
    //       <Text h3 color="black">
    //         Acme camera
    //       </Text>
    //     </Col>
    //   </Card.Header>
    //   <Card.Body css={{ p: 0 }}>
    //     <Card.Image
    //       src="https://nextui.org/images/card-example-6.jpeg"
    //       width="100%"
    //       height="100%"
    //       objectFit="cover"
    //       alt="Card example background"
    //     />
    //   </Card.Body>
    //   <Card.Footer
    //     isBlurred
    //     css={{
    //       position: "absolute",
    //       bgBlur: "#ffffff66",
    //       borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
    //       bottom: 0,
    //       zIndex: 1,
    //     }}
    //   >
    //     <Row>
    //       <Col>
    //         <Text color="#000" size={12}>
    //           Available soon.
    //         </Text>
    //         <Text color="#000" size={12}>
    //           Get notified.
    //         </Text>
    //       </Col>
    //       <Col>
    //         <Row justify="flex-end">
    //           <Button flat auto rounded color="secondary">
    //             <Text
    //               css={{ color: "inherit" }}
    //               size={12}
    //               weight="bold"
    //               transform="uppercase"
    //             >
    //               Notify Me
    //             </Text>
    //           </Button>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Card.Footer>
    // </Card>
    // <Card isPressable>
    //   <Card.Body css={{ p: 0 }}>
    //     <Card.Image
    //       src="https://nextui.org/images/card-example-6.jpeg"
    //       objectFit="cover"
    //       width="100%"
    //       height={140}
    //       alt="imaghe"
    //     />
    //   </Card.Body>
    //   <Card.Footer css={{ justifyItems: "flex-start" }}>
    //     <Row wrap="wrap" justify="space-between" align="center">
    //       <Text b>salkaslksa</Text>
    //       <Text
    //         css={{
    //           color: "$accents7",
    //           fontWeight: "$semibold",
    //           fontSize: "$sm",
    //         }}
    //       >
    //         2323
    //       </Text>
    //     </Row>
    //   </Card.Footer>
    // </Card>
    <div className="tw-w-[223px]">
      <Image
        width={274}
        height={171}
        src={Images.bankTime}
        alt="Default Image"
      />
      <div className="tw-w-[223px] tw-h-[101px] tw-p-0">
        <ul className="list-image-[url(/images/homepage/hover/check.png)]">
          <li className="tw-text-[10px]">Open your account in 3 minutes</li>
          <li className="tw-text-[10px]">No hidden fees & tricks (ever)</li>
          <li className="tw-text-[10px]">Open your account in 3 minutes</li>
        </ul>
      </div>
    </div>
  );
};
