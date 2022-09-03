export default function BoilingVer({celsius = 0}){
    if (celsius >= 100) {
        return <p>Boil Successfully...</p>
    }
    return <p>Boil is not successful yet...</p>
}
/*
we can use this 
function BoilingVer(props){
    then get celsius value with 'props.celsius'
}
*/