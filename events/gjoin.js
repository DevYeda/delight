module.exports = (Bot) => {
  bot.guildJoinCommand({
    channel: "$randomChannelID",
    code: `
$color[1;Red]
$thumbnail[1;$serverIcon]
$description[1;**Merhaba!
Botumuzla İlgili Bir Sorun Yaşarsan [Destek Sunucuma]() Beklerim**]
$footer[1;**Beni Kullandığınız İçin Teşekkürler**]
`
  })
}