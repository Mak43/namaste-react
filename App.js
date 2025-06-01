import React from "react";
import ReactDOM from "react-dom/client";

// applayout

// header
//logo
//nav items
// body
//serch bar
// restaurant card
//footer
//copyright
//links

const Header = () => {
  return (
    <div className="res-header">
      <div className="res-logo">
        <img
          src="https://img.icons8.com/?size=100&id=SENAO5gAbChk&format=png&color=000000"
          alt="rest-logo"
        />
      </div>
      <div className="res-nav-items">
        <ul>
          <li>home</li>
          <li>About</li>
          <li>Jouney</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "49005",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
      locality: "Gopalan Signature Mall",
      areaName: "Old Madras Road",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-gopalan-signature-mall-old-madras-road-rest49005",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "460431",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/85a96b66-9228-4bb3-86b8-673a994254bb_460431.jpg",
      locality: "Old Madras Road",
      areaName: "Gopalan Signature Mall",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "9.0K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "43K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-old-madras-road-gopalan-signature-mall-rest460431",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "613824",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "Akash Nagar",
      areaName: "Kaggadasapura",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
      avgRating: 4.3,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.3",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-akash-nagar-kaggadasapura-rest613824",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23423",
      name: "Samosa Party",
      cloudinaryImageId: "tjvc0aazurmha5ovsazb",
      locality: "HAL 3rd Stage",
      areaName: "Jeevan Bima Nagar",
      costForTwo: "₹150 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery",
      ],
      avgRating: 4.4,
      parentId: "6364",
      avgRatingString: "4.4",
      totalRatingsString: "48K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "40-50 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Snacks.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Snacks.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/samosa-party-hal-3rd-stage-jeevan-bima-nagar-rest23423",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "48085",
      name: "Kanti Sweets",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/ad2687a4-5c4c-4eff-963c-d2802377b977_48085.jpg",
      locality: "Kasturi Nagar",
      areaName: "Kasturi Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Sweets"],
      avgRating: 4.7,
      veg: true,
      parentId: "4700",
      avgRatingString: "4.7",
      totalRatingsString: "5.2K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kanti-sweets-kasturi-nagar-rest48085",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "156419",
      name: "The Good Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/bb72c58d-0eb9-4094-b9eb-21491a15d310_156419.jpg",
      locality: "CHANNASANDRA",
      areaName: "KR PURAM HOBLI",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "7918",
      avgRatingString: "4.3",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-good-bowl-channasandra-kr-puram-hobli-rest156419",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "568896",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/b418333d-2f32-462f-868b-4fa6c6d59b56_568896.jpg",
      locality: "Nagavara Palya",
      areaName: "Old Madras Road",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.4,
      parentId: "1557",
      avgRatingString: "4.4",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/taco-bell-nagavara-palya-old-madras-road-rest568896",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "340060",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/13/9c42b828-96b1-4914-b64d-b8de4ac4da99_340060.jpg",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.5,
      parentId: "195515",
      avgRatingString: "4.5",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "584",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/starbucks-coffee-indiranagar-rest340060",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "778851",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/80b2b78a-dc0d-4473-9e99-4c598ce49054_778851.JPG",
      locality: "OLD MADRAS ROAD",
      areaName: "RMZ Infinity",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.7,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.7",
      totalRatingsString: "89",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-old-madras-road-rmz-infinity-rest778851",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "30646",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0cf4f4c4-51cf-44d3-bc85-caf33f584598_30646.JPG",
      locality: "Gopalan Signature Mall",
      areaName: "Old Madras Road",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-gopalan-signature-mall-old-madras-road-rest30646",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "98530",
      name: "Polar Bear",
      cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
      locality: "Gopalan Signature Mall",
      areaName: "Old Madras Road",
      costForTwo: "₹100 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "726",
      avgRatingString: "4.7",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/polar-bear-gopalan-signature-mall-old-madras-road-rest98530",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "186090",
      name: "The Biryani Life",
      cloudinaryImageId: "c7zysrzk97noyodihswj",
      locality: "Opposite to Karthick Bar",
      areaName: "KR PURAM HOBLI",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "8496",
      avgRatingString: "4.0",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-biryani-life-opposite-to-karthick-bar-kr-puram-hobli-rest186090",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "13703",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/19d222f6-a47a-4006-8e61-c27661204fbd_13703.JPG",
      locality: "Kaggadasapura Main Road",
      areaName: "CV Raman Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-kaggadasapura-main-road-cv-raman-nagar-rest13703",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "678014",
      name: "Wow! China",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/19/e78ba4ec-c64e-4677-905e-5a48ca1b7f12_678014.jpg",
      locality: "Sangeeta Towers",
      areaName: "Indiranagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Asian", "fastfood", "Beverages", "Snacks"],
      avgRating: 3.9,
      parentId: "226836",
      avgRatingString: "3.9",
      totalRatingsString: "422",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹19",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/wow-china-sangeeta-towers-indiranagar-rest678014",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "487494",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId: "tj0x1ujyochmrbg1rngm",
      locality: "Pai Layout",
      areaName: "Mahadevapura",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "315",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-pai-layout-mahadevapura-rest487494",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1286",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/42be0ca8-3504-49bf-bc18-e293252702a7_1286.jpg",
      locality: "Jeevanbhimanagar",
      areaName: "Jeevan Bhima Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
      parentId: "371281",
      avgRatingString: "4.5",
      totalRatingsString: "175K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "7.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-jeevanbhimanagar-jeevan-bhima-nagar-rest1286",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "457308",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/13070c10-ea19-4504-b869-2911ea3d4d27_457308.jpg",
      locality: "New Thipasandra",
      areaName: "Indiranagar",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "8.3K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bakingo-new-thipasandra-indiranagar-rest457308",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "86653",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/fd48d87b-6ad7-4268-8374-3df7df120457_86653.JPG",
      locality: "1st stage",
      areaName: "Indiranagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹148",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nic-ice-creams-1st-stage-indiranagar-rest86653",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "35895",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/96355469-0fb1-4cc7-b364-ce2dab0ab10a_35895.jpg",
      locality: "CHANNASANDRA",
      areaName: "KR PURAM HOBLI",
      costForTwo: "₹450 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.1,
      parentId: "4444",
      avgRatingString: "4.1",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-channasandra-kr-puram-hobli-rest35895",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "39714",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/3c9d9e68-cf23-4834-808a-8b1c9e99dc80_39714.JPG",
      locality: "Old Madras Road",
      areaName: "Old Madras Road",
      costForTwo: "₹300 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "6.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1e03dcaf-69d9-4ade-b77d-523dd6824a7d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-old-madras-road-rest39714",
      type: "WEBLINK",
    },
  },
];
const RestaurantCard = (props) => {
  // const {resName,cuisine, rating} = props; // destructing of props
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-card-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
        alt="card-logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(" , ")}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="res-body">
      <div className="res-search">Search</div>
      <div className="res-card-container">
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="res-footer">
      <div className="res-copy-right">
        <h1>copyright</h1>
      </div>
      <div className="links"></div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="res-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
