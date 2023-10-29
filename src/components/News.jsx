import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Cheyenne MacDonald",
          "title": "Apple's upgraded 2nd-gen AirPods Pro with USB-C are $50 off right now",
          "description": "Apple’s refreshed second-generation AirPods Pro\r\n are down to just $200 on Amazon in a discount almost as good as we saw during October’s Prime Day event. The deal cuts $50 off the normal price of $250. The second-generation AirPods Pro got an upgrade in Sept…",
          "url": "https://www.engadget.com/apples-upgraded-2nd-gen-airpods-pro-with-usb-c-are-50-off-right-now-182421286.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/b5huK6vwfeS766ESzxXnlw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTY-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/24bc4ec0-7686-11ee-bfdf-5c7910aa59ea",
          "publishedAt": "2023-10-29T18:24:21Z",
          "content": "Apples refreshed second-generation AirPods Pro\r\n are down to just $200 on Amazon in a discount almost as good as we saw during Octobers Prime Day event. The deal cuts $50 off the normal price of $250… [+1553 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "Gurman: USB-C AirPods Max Not Coming Until 'Late 2024'",
          "description": "Apple won't update the AirPods Max until late 2024 and apart from fresh colors and USB-C charging, no other major changes are expected. That's according to Bloomberg's Mark Gurman. \n\n\n\n\n\nWriting in the latest edition of his Power On newsletter, Gurman says Ap…",
          "url": "https://www.macrumors.com/2023/10/29/gurman-usb-c-airpods-max-late-2024/",
          "urlToImage": "https://images.macrumors.com/t/WIvogoanwYXmZE4y6O7MPoPRgos=/1600x/article-new/2022/04/airpods-max-spring-blue.jpg",
          "publishedAt": "2023-10-29T13:52:43Z",
          "content": "Apple won't update the AirPods Max until late 2024 and apart from fresh colors and USB-C charging, no other major changes are expected. That's according to Bloomberg's Mark Gurman. \r\nWriting in the l… [+747 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Zachary McAuliffe",
          "title": "This iOS 17 Feature Blocks Unsolicited Nudes on Your iPhone - CNET",
          "description": "The feature works in Apple services, like Messages and AirDrop.",
          "url": "https://www.cnet.com/tech/services-and-software/this-ios-17-feature-blocks-unsolicited-nudes-on-your-iphone/",
          "urlToImage": "https://www.cnet.com/a/img/resize/32c24538cfcb439859a182df9b509a6e4086b657/hub/2023/10/17/95bd467a-3783-4698-b495-57ea3d853554/gettyimages-1676557935.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2023-10-29T11:00:07Z",
          "content": "Apple released iOS 17 on Sept. 18, and the OS included a handful of fun new features and improvements, like Live Stickers and offline maps. But one new feature included in iOS 17 is designed to help … [+1837 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Max McHone",
          "title": "This 43% Discount Knocks Beats' Premium Studio Pro Headphones Down to $200 - CNET",
          "description": "These are the latest and most advanced Beats headphones on the market, and right now you can snag all four colors for $150 off.",
          "url": "https://www.cnet.com/deals/beats-studio-pro-150-off-amazon/",
          "urlToImage": "https://www.cnet.com/a/img/resize/fed67012b805287feca3d198a702b6fb31bcf3b7/hub/2023/08/24/858c34ec-5cda-402c-be69-019a045f02af/beats-studio-pro.jpg?auto=webp&fit=crop&height=675&width=1200",
          "publishedAt": "2023-10-29T14:00:25Z",
          "content": "With a $350 list price, CNET reviewer David Carnoy likened Beats' premium Studio Pro headphones to a more affordable version of Apple's high-end AirPods Max. They've already claimed a spot on our lis… [+1430 chars]"
        }
      ]
    constructor() {
        super();
        console.log("hello i am a constructor from news js componenet")
        this.state = {
            articls: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <>
        <div className="row">
            {
                this.state.articls.map((element) => {
                    return <div className="col-md-4 col-sm-6" key={element.url}>
                        <NewsItem
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        newsUrl={element.url}
                        />
                    </div>
                })
            }
          {/* <div className="col-md-4 col-sm-6">
            <NewsItem
              title="This is a title 1"
              description="This is a description 1"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <NewsItem />
          </div> */}
        </div>
      </>
    );
  }
}

export default News;
