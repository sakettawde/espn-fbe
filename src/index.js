import { Hono } from "hono"
import { cors } from "hono/cors"
// import { basicAuth } from 'hono/basic-auth'
import { prettyJSON } from "hono/pretty-json"

const app = new Hono()
app.get("/", (c) => c.text("Dummy ESPN CricInfo API"))
app.use("*", prettyJSON())
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404))

async function sleep(ms) {
  await new Promise((r) => setTimeout(() => r(), ms))
}

const api = new Hono()
api.use("*", cors())

api.get("/matchReport", async (c) => {
  const response = {
    status: 200,
    message: "success",
    matchReport: [
      {
        id: 1,
        tooltip: "IND v AUS",
        isLive: true,
        status: "LIVE",
        title: "3rd Test",
        venue: "Indore",
        country1: "IND",
        country2: "AUS",
        country1Session1: "109",
        country1Session2: "163",
        country2Session1: "109",
        country2Session2: "13/1",
        CompletedOver: "10",
        totalOver: "76",
        summary: "Day 3 - Session 1: Australia need 63 runs.",
      },
      {
        id: 2,
        isLive: false,
        tooltip: "SRI v NEW",
        status: "Today, 7:30 PM",
        title: "2nd Test",
        venue: "Orlando",
        country1: "SRI",
        country2: "NEW",
        country1Session1: "",
        country1Session2: "",
        country2Session1: "",
        country2Session2: "",
        CompletedOver: "",
        totalOver: "",
        summary: "Match starts in 3 hrs 36 min.",
      },
      {
        id: 3,
        isLive: false,
        tooltip: "PAK v BAN",
        status: "Today, 8:30 PM",
        title: "2nd Test",
        venue: "Lahore",
        country1: "PAK",
        country2: "BAN",
        country1Session1: "",
        country1Session2: "",
        country2Session1: "",
        country2Session2: "",
        CompletedOver: "",
        totalOver: "",
        summary: "Match starts in 3 hrs 36 min.",
      },
      {
        id: 4,
        isLive: false,
        tooltip: "AFG v ZIM",
        status: "Today, 9:30 AM",
        title: "2nd Test",
        venue: "Harrare",
        country1: "AFG",
        country2: "ZIM",
        country1Session1: "",
        country1Session2: "",
        country2Session1: "",
        country2Session2: "",
        CompletedOver: "",
        totalOver: "",
        summary: "Match starts in 3 hrs 36 min.",
      },
    ],
  }

  await sleep(Math.random() * 2000 + 500)

  return c.json(response)
})

api.get("/cricketStory", async (c) => {
  const response = {
    status: 200,
    message: "success",
    story: [
      {
        id: 1,
        title: "World Cup ready",
        iconUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
      },
      {
        id: 2,
        title: "World Cup ready",
        iconUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
      },
      {
        id: 3,
        title: "World Cup ready",
        iconUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
      },
      {
        id: 4,
        title: "World Cup ready",
        iconUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
      },
      {
        id: 5,
        title: "World Cup ready",
        iconUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
      },
    ],
  }

  await sleep(Math.random() * 2000 + 500)

  return c.json(response)
})

api.get("/trendingNews", async (c) => {
  const response = {
    status: 200,
    message: "success",

    trendingNews: [
      {
        id: 1,
        title:
          "Harmanpreet hopes WPL will reduce gap between India and Australia",
        bannerUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
        description:
          "Says league will start to widen and improve talent pool in the country Says league will start to widen and improve talent pool in the country",
      },
      {
        id: 2,
        title:
          "Harmanpreet hopes WPL will reduce gap between India and Australia",
        bannerUrl: "https://static.toiimg.com/photo/msid-70152799/70152799.jpg",
        description:
          "Says league will start to widen and improve talent pool in the country Says league will start to widen and improve talent pool in the country",
      },
    ],
  }

  await sleep(Math.random() * 2000 + 500)

  return c.json(response)
})

app.route("/api", api)

export default app
