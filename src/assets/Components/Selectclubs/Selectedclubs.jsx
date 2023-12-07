import { jsonObject } from "../Json/Json";
function Selectclubs () {
  const clubs = jsonObject.clubs[0]
  const clubflag = jsonObject.clubs[0].url
  console.log(clubflag);

  console.log(clubs);

  return(
    <>
    hello
    < img src={clubflag} />
    </>
  )

}

export default Selectclubs