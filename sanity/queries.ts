export const SCHEDULE_QUERY = `
  *[_type == "weeklySchedule"][0] {
    days[] {
      day,
      classes[] {
        time,
        name,
        restricted,
        sub
      }
    }
  }
`
