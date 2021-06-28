import React from "react";
import MyAppJumboHeader from "../components/myapp/landingpage/MyAppJumboHeader";
import MyAppFeatures from "../components/myapp/landingpage/MyAppFeatures";
import MyAppBoldPromo from "../components/myapp/landingpage/MyAppBoldPromo";
import { features, bigFeatures } from "../data/MyAppFeaturesData";

export default () => (
  <div>
    <MyAppJumboHeader />
    {/* <MyAppBoldPromo /> */}
    <MyAppFeatures features={features} bigFeatures={bigFeatures} />
  </div>
);
