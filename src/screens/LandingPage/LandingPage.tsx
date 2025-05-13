import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const LandingPage = (): JSX.Element => {
  const benefits = [
    {
      id: 1,
      title: "הענקת תקווה ואופטימיות",
      description:
        "קבלת עזרה ומתן עזרה יכול להעניק תחושת תקווה ואופטימיות, ולספק תמריץ להתמודדות עם אתגרים ומצוקות.",
      imageSrc: "/group-1.png",
      imageAlt: "Group",
      position: "top",
    },
    {
      id: 2,
      title: "חיזוק תחושת התמיכה והחיבור",
      description:
        "הקשר עם מתנדבים יכול לחזק את תחושת התמיכה והחיבור של המקבלים לקהילה ולגרום להם להרגיש פחות לבד.",
      imageSrc: "/group-2.png",
      imageAlt: "Group",
      position: "top",
    },
    {
      id: 3,
      title: "תחושת קהילתיות ושייכות",
      description:
        "השתתפות בפעילויות התנדבותיות מחזקת את תחושת השייכות לקהילה ומעצימה את הקשרים החברתיים והתרבותיים.",
      imageSrc: "/group.png",
      imageAlt: "Group",
      position: "bottom",
    },
    {
      id: 4,
      title: "הזדמנות ליצור קשרים חברתיים",
      description:
        "התנדבות מציעה הזדמנות להכיר אנשים חדשים וליצור קשרים חברתיים עם אנשים שחולקים ערכים דומים.",
      imageSrc: "/together-1.png",
      imageAlt: "Together",
      position: "bottom",
    },
  ];

  return (
    <div className="bg-[#fefae0] w-full">
      <div className="bg-[#fefae0] w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[711px] bg-[url(/5-1.png)] bg-cover bg-center">
          <div className="max-w-[1366px] h-full mx-auto relative px-4 lg:px-0">
            <Button
              variant="outline"
              className="absolute top-[20px] md:top-[74px] left-[20px] md:left-[121px] bg-[#ffa2451a] rounded-[42px] border-[3px] border-solid border-black px-[27px] py-[7px]"
            >
              <span className="relative w-fit mt-[-3.00px] font-extrabold text-base md:text-lg [font-family:'Heebo',Helvetica] text-black text-center tracking-[0] leading-[normal] [direction:rtl]">
                צרו קשר
              </span>
            </Button>

            <Button className="absolute top-[380px] md:top-[480px] left-[20px] md:left-[auto] md:right-[20px] lg:left-[1059px] bg-[#ffa245] rounded-[42px] px-[27px] py-[7px]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Heebo',Helvetica] font-medium text-black text-base md:text-lg tracking-[0] leading-[normal] [direction:rtl]">
                הצטרפו עוד היום!
              </span>
            </Button>

            <div className="absolute top-[180px] md:top-[257px] right-[20px] md:right-[auto] md:left-[50%] md:transform md:-translate-x-1/2 lg:left-[698px] lg:transform-none [font-family:'Heebo',Helvetica] font-extrabold text-transparent text-4xl md:text-6xl lg:text-7xl leading-[1.2] md:leading-[72px] tracking-[0] [direction:rtl]">
              <span className="text-[#ffa245] leading-[1.2] md:leading-[94.8px]">כולנו</span>
              <span className="text-white leading-[1.2] md:leading-[94.8px]"> בשביל כולנו</span>
            </div>

            <div className="absolute w-[90%] md:w-[457px] top-[280px] md:top-[352px] right-[20px] md:right-[auto] md:left-[789px] [font-family:'Heebo',Helvetica] font-normal text-white text-base md:text-lg leading-[normal] tracking-[0] [direction:rtl]">
              בעמותת &#34;כולנו&#34; אנו מאמינים שכל אחד יכול לתרום ולקבל. יש לנו
              מגוון רחב של הזדמנויות התנדבות המתאימות לכל אחד, ללא קשר לגיל,
              לניסיון או לכישורים.
              <br />
              הצטרפו אלינו עוד היום ועשו שינוי אמיתי בעולם!
            </div>

            <img
              className="absolute w-24 md:w-32 h-10 md:h-14 top-[20px] md:top-[66px] right-[20px] md:right-[auto] lg:left-[1118px] object-cover"
              alt="Logo"
              src="/logo-1.png"
            />
          </div>
        </section>

        <div className="max-w-[1366px] mx-auto">
          {/* About Section */}
          <section className="mt-[60px] md:mt-[114px] flex flex-col items-center px-4 md:px-0">
            <div className="w-[80px] md:w-[110px] h-[80px] md:h-[103px] mb-[19px]">
              <img
                className="w-[80px] md:w-[103px] h-[80px] md:h-[103px] mx-auto"
                alt="Clip path group"
                src="/clip-path-group.png"
              />
            </div>

            <h2 className="h-[61px] [font-family:'BN_Sharon_New-Regular',Helvetica] font-normal text-transparent text-[30px] md:text-[40px] text-center leading-[normal] tracking-[0] [direction:rtl] mb-7">
              <span className="text-[#6b8501]">כולנו</span>
              <span className="text-black text-4xl md:text-5xl">&nbsp;</span>
              <span className="[font-family:'Heebo',Helvetica] font-semibold text-black text-3xl md:text-4xl">
                בשבילך
              </span>
            </h2>

            <p className="w-full md:w-[935px] h-auto md:h-[140px] [font-family:'Heebo',Helvetica] font-normal text-black text-lg md:text-xl text-center leading-[30px] md:leading-[35px] tracking-[0] [direction:rtl] mb-[80px] md:mb-[154px] px-4 md:px-0">
              עמותת &#34;כולנו&#34; נוסדה מתוך חזון של שיתוף פעולה, עזרה הדדית
              וקידום ההתנדבות בקהילה. אנו מאמינים כי כל אדם יכול לתרום ולעזור
              לאחר, וכל עזרה – גדולה או קטנה – היא בעלת ערך. אנו מחברים בין
              מתנדבים עם רצון טוב לבין אזרחים שזקוקים לסיוע בתחומים שונים. כל
              פעילותנו היא התנדבותית וללא מטרות רווח, ואנו מזמינים אתכם להצטרף
              אלינו במסע המיוחד הזה למען חברה טובה יותר.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-[80px] md:mb-[136px] px-4 md:px-0">
            <h2 className="h-[63px] text-center [font-family:'Heebo',Helvetica] font-normal text-black text-3xl md:text-4xl leading-[63px] whitespace-nowrap tracking-[0] [direction:rtl] mb-[17px]">
              <span className="font-semibold">
                איך ההתנדבות תורמת&nbsp;&nbsp;
              </span>
              <span className="[font-family:'BN_Sharon_New-Regular',Helvetica]">
                לכולנו
              </span>
              <span className="font-semibold">?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[50px] md:gap-y-[75px] gap-x-[20px] md:gap-x-[195px] justify-items-center">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.id}
                  className="w-full max-w-[391px] h-[227px] bg-transparent border-none shadow-none"
                >
                  <CardContent className="p-0 relative">
                    <div
                      className={`absolute w-[149px] h-[124px] ${benefit.position === "top" ? "top-2" : "top-0"} left-1/2 -translate-x-1/2 md:left-[119px] md:translate-x-0 rounded-[74.5px/62px]`}
                    />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-[118px] h-[118px] mb-[6px]">
                        <img
                          className="w-[108px] h-[108px] mx-auto my-[5px]"
                          alt={benefit.imageAlt}
                          src={benefit.imageSrc}
                        />
                      </div>
                      <h3 className="w-full md:w-[330px] h-auto md:h-[30px] [font-family:'BN_Sharon_New-Regular',Helvetica] font-normal text-[#6f8900] text-xl md:text-2xl text-center leading-[normal] tracking-[0] [direction:rtl] mb-[10px] px-2">
                        {benefit.title}
                      </h3>
                      <p className="w-full md:w-[387px] h-auto md:h-12 [font-family:'Heebo',Helvetica] font-light text-black text-sm md:text-base text-center leading-[normal] tracking-[0] [direction:rtl] px-2">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Footer/Contact Section */}
        <footer className="w-full bg-[#6f8900] px-4 py-8 [direction:rtl]">
          <div className="max-w-[1366px] mx-auto flex flex-col md:flex-row items-start justify-between
">


            {/* צד ימין – כותרת + טופס */}
            <div className="flex-1 md:max-w-[50%]">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-4">
                אנחנו כאן <span className="text-[#fefae0] font-normal">בשבילכם</span>
              </div>
              <div className="text-white text-lg md:text-xl mb-6">
                אם יש לכם שאלות, הצעות או צורך במידע נוסף, נשמח לשמוע מכם.
                כאן תוכלו להשאיר את פרטיכם ונחזור אליכם בהקדם האפשרי.
              </div>

              <div>
                <label className="text-white text-sm block mb-2">שם מלא</label>
                <Input
                  className="w-full bg-[#fefae0] rounded-[32px] px-4 h-10 mb-4"
                  placeholder="ישראל ישראלי"
                />
                <label className="text-white text-sm block mb-2">טלפון נייד</label>
                <Input
                  className="w-full bg-[#fefae0] rounded-[32px] px-4 h-10 mb-4 text-right"
                  placeholder="+972-521478965"
                />
                <Button className="bg-[#ffa245] text-black rounded-[42px] px-[27px] py-[7px] text-lg font-medium">
                  בואו נדבר!
                </Button>
              </div>
            </div>

            {/* צד שמאל – לוגו ואייקונים */}
            <div className="flex-1 md:max-w-[30%] flex flex-col items-center md:items-start text-center md:text-right">
              <img
                className="w-[120px] md:w-[150px] h-[131px] md:h-[164px] object-cover mb-4"
                alt="Logo"
                src="/-----1.png"
              />
              <div className="text-white text-lg font-medium mb-4">גם ברשתות החברתיות</div>
              <div className="flex gap-6 justify-center md:justify-start">
                <img className="w-[35px] h-[35px]" src="/instagram--1--1.png" alt="Instagram" />
                <img className="w-[18px] h-[35px]" src="/xmlid-834-.png" alt="Facebook" />
                <img className="w-[35px] h-[25px] mt-[5px]" src="/xmlid-822-.png" alt="YouTube" />
              </div>
            </div>

          </div>

          {/* זכויות יוצרים */}
          <div className="text-center text-white text-xs mt-8">© Kulanu 2024</div>
        </footer>

      </div>
    </div>
  );
};