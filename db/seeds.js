require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


const User = require('./models/User')
const World = require('./models/World')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
    `)
    process.exit(-1)
})

const middleEarth = new World({
    worldName: 'Middle Earth',
    seriesFrom: 'Lord of The Rings',
    description: `Middle-earthwas a large continent of Arda, situated 
    between Aman to the West (across Belegaer), and the Land of the 
    Sun to the East (across the East Sea). It is here that most of 
    the story of Arda takes place, and it was where the Children of 
    Ilúvatar; the Elves and Men, along with the Dwarves, came into
    being.`,
    tripAbout:`Do you enjoy quaint country villages where the 
    inhabitants are laid back, kindly, and perfectly content to 
    smoke a pipe on their porches? Or ride majestic horses on an 
    open expanse? Or maybe travel into dark desolate barren 
    landscapes where evil lurks at its heart? Then Middle-earth is 
    for you! Journey to the peaceful Shire and share a pipe with the 
    hobbits. Ride with the Rohirrim on the plains of Rohan. Or 
    travel deep into the pit of Mordor and spit in Sauron's eye. `,
    photoUrl: 'http://www.swaindestinations.com/blog/wp-content/uploads/2013/03/At-home-in-Middle-earth.jpg',
    mapUrl: 'https://img00.deviantart.net/99b4/i/2013/005/c/9/middle_earth_map_by_kethwyn2013-d5qih1p.jpg'
})

const wizardingWorld = new World({
    worldName: 'The Wizarding World',
    seriesFrom: 'Harry Potter',
    description: `The wizarding world, also referred to as the 
    magical community, is the society in which wizards and witches 
    live and interact separate from the Muggle (non-wizarding) 
    society. The two communities are kept separate through the use 
    of charms, spells, and secrecy. Wizards are forbidden to reveal 
    anything about magic to Muggle society due to the International 
    Statute of Wizarding Secrecy. Each country has a form of 
    wizarding government to oversee magical affairs in their 
    territory, such as a Ministry of Magic or a Council of Magic. 
    The International Confederation of Wizards serves as a wizarding 
    intergovernmental organisation.`,
    tripAbout:`Inhabiting our world, the Wizarding World shares 
    much in common with the things we find familiar. But there are 
    still wonders to behold hidden just out of sight. A magical 
    castle for students to learn the art of witchcraft,  a village 
    where all the inhabitants practice the arcane, down to a side 
    street in the heart of London where one can find all their 
    magical needs, The Wizarding World is right up your alley if 
    you want a little magic added to the mundane.`,
    photoUrl:'https://i.ytimg.com/vi/xBAeOTHtZVg/maxresdefault.jpg',
    mapUrl: 'http://img.auctiva.com/imgdata/1/4/4/1/6/8/2/webimg/459583018_o.jpg'
})

const sevenKingdoms = new World({
    worldName: 'The Seven Kingdoms',
    seriesFrom: 'Song of Ice and Fire',
    description: `The Seven Kingdoms is the name given to the 
    realm that controls most of the continent of Westeros and 
    its numerous offshore islands, ruled by the King of the 
    Andals and the First Men from the Red Keep in the city of 
    King's Landing.`,
    tripAbout:` Maybe safety isn't your highest concern. You don't want to go to these places 
    where everyone treats you with kindness and respect. Maybe you 
    want to catch a disease that slowly turns your skin to stone 
    and your mind into mush. Maybe running from people who want 
    nothing more than to see your head on a spike is appealing to you. 
    Or freezing you wee parts off while roaming a giant ice wall while 
    bloodthirsty ice zombies plot your destruction sounds like fun. 
    You are absolutely insane. We are not responsible for your safety. 
    Travel to the Seven Kingdoms. It's gonna suck.`,
    photoUrl:'http://watchersonthewall.com/wp-content/uploads/2016/12/Kings-Landing-Great-Sept-6x10-1.png',
    mapUrl: "https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
})

const wheelOfTime = new World({
    worldName: 'The Westlands',
    seriesFrom: 'The Wheel of Time',
    description: `The Westlands contains multiple kingdoms and 
    city-states and is bounded on the east by a mountain range. 
    To the east is a desert, the Aiel Waste, inhabited by the 
    Aiel warrior people, who live in small settlements and whose 
    society is organized into clans and warrior societies. 
    Further east is the large and predominantly insular nation 
    of Shara, separated from the Waste by large mountain ranges 
    and other impassable terrain. North of all three regions is 
    the Great Blight, a hostile wilderness inhabited by evil 
    beings. The Westlands are mostly temperate; it and the Aiel 
    Waste are located in the world's northern mid-latitudes. 
    Shara extends slightly south of the equator.`,
    tripAbout:`There are neither beginnings or endings in the world 
    of the Wheel of Time. But this trip can be A beginning. Travel 
    to powerful countries or city-states where the cultures vary 
    from place to place. Roam the Wastes with the enigmatic Aiel 
    and learn the ways of ji'e'toh.  Or hold court with the Empress 
    of the Crystal Throne.`,
    photoUrl:'https://vignette.wikia.nocookie.net/wot/images/4/44/Tar_Valon.jpg/revision/latest?cb=20100320230956',
    mapUrl: 'http://privat.bahnhof.se/wb160542/bengt/bokfiler/Route%2000%20New%20Spring.jpg'
})





User.remove({}).then(() => {
    return World.remove({})
}).then(() => {
        const jasenBaker = new User({
            userName: 'Novemberist',
            firstName: 'Jasen',
            lastName: 'Baker',
            home: 'Georgia, USA',
            testimonial:'I had so much fun visited the worlds of my imagination. Nearly died in The Seven Kingdoms though!',
            numberOfTrips: 4,
            photoUrl: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19224992_10154389810307127_8105888593912301500_n.jpg?oh=829d164640ef2a2856129691823d2f39&oe=5AE15440'
        })
        jasenBaker.worldsVisited.push(middleEarth, wizardingWorld, sevenKingdoms, wheelOfTime)

        return jasenBaker.save()
    }).then(() => {
        const nintiChance = new User({
            userName: 'Minti',
            firstName: 'Ninti',
            lastName: 'Chance',
            home: 'Georgia, USA',
            testimonial: 'OMG! The Wizarding World was the best! I totally bought a cute little owl to deliver my mail.',
            numberOfTrips: 3,
            photoUrl: "https://media-exp2.licdn.com/media/AAMAAQDGAAwAAQAAAAAAAA6-AAAAJGU2Yjk2OGQ5LWEyZTMtNGUwOS05NTMxLWUyMDlkYTM0MDliMg.jpg"
        })
        return nintiChance.save()
    }).then(() => {

        const timTurnquist = new User({
            userName: 'TallNord',
            firstName: 'Tim',
            lastName: 'Turnquist',
            home: 'Georgia, USA',
            testimonial:'Naaaarg!',
            numberOfTrips: 5,
            photoUrl: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18556054_10103644972677661_4371251815775200258_n.jpg?oh=9c89e51a32954ff7c5b693d862d1888e&oe=5AF1E7D1'
        })
        return timTurnquist.save()
    }).then(() => {
        return middleEarth.save()
    }).then(() => {
        return wizardingWorld.save()
    }).then(() => {
        return sevenKingdoms.save()
    }).then(() => {
        return wheelOfTime.save()
    }).catch((err) => {
        console.log('ERROR SEEDING DATA!!')
        console.log(err)
    }).then(() => {
        mongoose.connection.close()

        console.log(`Finished seeding database...
    
    Disconnected from MongoDB`)
    })
