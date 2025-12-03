"use client";

import Script from "next/script";

const AnalyticsScript = () => {
	return (
		<>
			<Script
				src='https://www.googletagmanager.com/gtag/js?id=G-108GOGJM3S'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-108GOGJM3S');
        `}
			</Script>
		</>
	);
};

export default AnalyticsScript;
