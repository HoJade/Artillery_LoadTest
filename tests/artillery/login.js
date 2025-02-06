const { setPriority } = require('os')
const { testLogin } = require('../commands/login')

async function artilleryScript(page, vuContext, events, test) {

    // output current metrics - incrementing a custom counters
    events.emit("counter", `user.${vuContext.scenario.name}.page_loads`, 1)

    await test.step("LOGIN", async () => {
        await testLogin(page)
    })

    // await test.step("SECOND STEP", async() => {
    //     console.log("Hello!")
    // })

}

module.exports = {
    artilleryScript
}