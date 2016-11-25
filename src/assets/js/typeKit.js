try{
    Typekit.load({ async: true })
    console.log('load')
}catch(e){
    console.log('rrrrrre')
    console.log(e)
}
