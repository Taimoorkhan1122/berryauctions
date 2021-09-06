// images
import nftImg1 from "../images/content_images/park_01.png";
import nftImg2 from "../images/content_images/park_02.jpg";
import nftImg3 from "../images/content_images/park_03.jpg";
import nftImg4 from "../images/content_images/park_04.png";
import nftImg5 from "../images/content_images/park_05.png";
import nftImg6 from "../images/content_images/하지원_슈퍼카우3.png";
// ARTISTS
import artist1 from "../images/content_images/박기웅_배경화면.jpg";
import artist2 from "../images/content_images/오승환_배경화면.jpg";
import artist3 from "../images/content_images/하지원_배경화면.jpg";

import defaultAvatar from "../images/defaultAvatar.png";

export type AuctionData = {
  id: string;
  heading: string;
  nftLink: string;
  avatar: string;
  username: string;
  owner: string;
  timeRemaining: string;
  currentBid: string;
  price: string;
  bidingStatus: boolean;
  bids: {
    isWinner: boolean;
    walletAddress: string;
    bidingAmount: string;
  }[];
};

export const auctionData: AuctionData[] = [
  {
    owner: "오승환",
    id: "01",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "ego",
    nftLink: nftImg1,
    currentBid: "0.932 BBR",
    bids: [
      {
        isWinner: false,
        walletAddress: "0x45f6...aaa5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0x42f33...aba5",
        bidingAmount: "1.00 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x42f3...aca5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x42f3...aaa5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x53f3...abd5",
        bidingAmount: "0.528 BBR",
      },
    ],
    username: "하지원",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: false,
    price: "2,000,000",
  },
  {
    owner: "Taimoor khan",
    id: "02",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "슈퍼카우3",
    nftLink: nftImg2,
    currentBid: "0.532 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: true,
    bids: [
      {
        isWinner: false,
        walletAddress: " 0x452f3...baa5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x42f3...avs5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0x4ef3...a555",
        bidingAmount: "0.728 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "Taimoor khan",
    id: "03",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "Show me what you got",
    nftLink: nftImg3,
    currentBid: "0.532 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: true,
    bids: [
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.728 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "Nawaz",
    id: "04",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "ELON lettering",
    nftLink: nftImg4,
    currentBid: "0.328 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: true,
    bids: [
      {
        isWinner: false,
        walletAddress: " 0x42f3...aaa5",
        bidingAmount: "0.628 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.728 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "Nawaz",
    id: "05",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "Show me what you got",
    nftLink: nftImg3,
    currentBid: "0.332 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: false,
    bids: [
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.728 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x42f3...aaa5",
        bidingAmount: "0.528 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "Taimoor khan",
    id: "06",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "ego",
    nftLink: nftImg1,
    currentBid: "0.532 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: true,
    bids: [
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.728 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "오승환",
    id: "07",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "ELON lettering",
    nftLink: nftImg4,
    currentBid: "0.528 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: true,
    bids: [
      {
        isWinner: false,
        walletAddress: "0x42f3...aaa5",
        bidingAmount: "0.7028 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.28 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "오승환",
    id: "08",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "ego",
    nftLink: nftImg1,
    currentBid: "0.532 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: false,
    bids: [
      {
        isWinner: true,
        walletAddress: " 0x42f3...aaa5",
        bidingAmount: "0.728 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.728 BBR",
      },
    ],
    price: "2,000,000",
  },
  {
    owner: "박기웅",
    id: "09",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    heading: "슈퍼카우3",
    nftLink: nftImg2,
    currentBid: "0.532 BBR",
    username: "박기웅",
    timeRemaining: "4일 18시 12분 27초",
    bidingStatus: true,
    bids: [
      {
        isWinner: true,
        walletAddress: " 0x42f3...aaa5",
        bidingAmount: "0.728 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0x43f3...bba5",
        bidingAmount: "0.528 BBR",
      },
      {
        isWinner: false,
        walletAddress: " 0xeef3...43aa5",
        bidingAmount: "0.328 BBR",
      },
      {
        isWinner: true,
        walletAddress: " 0xerdf3...a3435",
        bidingAmount: "0.728 BBR",
      },
    ],
    price: "2,000,000",
  },
];

export interface IArtistData {
  imgLink: string;
  avatar: string;
  username: string;
  profession: string;
  about: string;
  totalWork: number;
  walletAddress: string;
  links?: string[];
}

export const artistData: IArtistData[] = [
  {
    imgLink: artist1,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "박기웅",
    profession: "Artist",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 15,
    walletAddress: " 0x42f3...aaa5",
  },
  {
    imgLink: artist2,
    avatar: defaultAvatar,
    username: "Taimoor khan",
    profession: "Sport Star",
    links: [],
    about: "",
    totalWork: 5,
    walletAddress: " 0x42f3...aaa5",
  },
  {
    imgLink: artist3,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "오승환",
    profession: "Arttrainer",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 25,
    walletAddress: " 0x42f3...aaa5",
  },
  {
    imgLink: artist1,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "Ilyas Afridi",
    profession: "GameItem",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 25,
    walletAddress: " 0x42f3...aaa5",
  },

  {
    imgLink: artist2,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "Umair khan",
    profession: "Sport Star",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 5,
    walletAddress: " 0x42f3...aaa5",
  },
  {
    imgLink: artist2,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "Nawaz",
    profession: "Sport Star",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 5,
    walletAddress: " 0x42f3...aaa5",
  },
  {
    imgLink: artist3,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "some other guy",
    profession: "Celebrity",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 25,
    walletAddress: " 0x42f3...aaa5",
  },
  {
    imgLink: artist1,
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg",
    username: "Robert Junior",
    profession: "Collector",
    links: ["hello"],

    about:
      "다양한 팔색조 매력을 가지고 있어서 선역·악역, 청순 하고 귀여운 캐릭터·강렬하고 섹시한 캐릭터, 현대극· 사극, 비극·코미디, 멜로·액션 등 어떤 장르의 어떤 캐 릭터에도 다 잘 어울리는, 스펙트럼이 무척 넓은 스...",
    totalWork: 25,
    walletAddress: " 0x42f3...aaa5",
  },
];
