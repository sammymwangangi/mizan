import Image from "next/image";

const features = [
  {
    tag: "feature1",
    title: "Mizan Pay - Shop now pay at your own pace",
    description:
      "With our aethetically appealing mizan metal card, you can easily spread your payments upto 12 months. No late payment fees, no penalties. What you borrow is what you will pay. Let’s just keep it at that.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761579572",
  },
  {
    tag: "feature2",
    title: "Track Ur buck. “The Ostrich-effect”",
    description:
      "Here’s the thing,none of us like bad news, so we tend to bury our heads in the sand and pretend we did not just purchase that overpriced bag.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677798372941",
  },
  {
    tag: "feature3",
    title: "Donate to a cause you care. (Effortlessly)",
    description:
      "Do you want to build your own palace made of golden bricks and silver in Paradise? Or just want to hang out with the prophet muhammad (P.BU.H)? Well, no one lives forever, so start prepping for tomorrow.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature3.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761792322",
  },
  {
    tag: "feature4",
    title: "Better Credit Score. Better future",
    description:
      "It takes years to build reputation and seconds to destory it. Sometimes we really dont know whether we are building a better credit score or destroying it.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature4.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761790412",
  },
  {
    tag: "featur5",
    title: "Mizan Round-Ups",
    description:
      "Whether that’s a new phone, a pair of sneakers or a ticket to Space - we can help you form the right saving habits to achive your goal.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677757744980",
  },
  {
    tag: "feature6",
    title: "Meet Robin-Habibi, Your BFF (Best Financial Friend)",
    description:
      "Automate the big picture,with award winning, robo-advisor we nicknamed “Robin-Habibi” .",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677761733541",
  },
  {
    tag: "feature7",
    title: "Mizan Early Salary via Direct Deposits",
    description:
      "Don’t wait until payday to have a play day. Why wait anyway? You’ve worked hard for your moolah.",
    imageUrl:
      "https://ik.imagekit.io/qqkp8wchu/feature7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677798389210",
  },
];

export default function Features() {
  return (
    <section className="feature">
      <div className="feature-header">
        <h1>Features</h1>
      </div>
      <div className="swiper featureSwiper">
        <div className="swiper-wrapper">
          {features.map((feature) => (
            <div key={feature.tag} className="swiper-slide">
              <div className="light-border">
                <div className="feature-card">
                  <div className="feature-card-img">
                    <Image src={feature.imageUrl} alt={feature.tag} width={440} height={374} />
                  </div>
                  <div className="feature-card-def">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
