

async function fetchIPAddress(domain) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
      headers: {
        'accept': 'application/dns-json'
      }
    })
    const respObject = await resp.json()
    console.log(respObject)
    return respObject
    
  }

const domain = 'api.boot.dev'
const ipAddress =  fetchIPAddress(domain)
if (!ipAddress) {
  console.log('something went wrong in fetchIPAddress')
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`)
}

fetchIPAddress();


  
/* const domain = 'api.boot.dev'
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress) {
  console.log('something went wrong in fetchIPAddress')
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`)
} */

function getDomainNameFromURL(url) {
  // console.log(url) console prints the name of url
   const urlObj = new URL(url)
   console.log(urlObj)
   console.log(urlObj.protocol)
   console.log(urlObj.hostname)
   return urlObj.hostname
   //console.log(url)
 }
 
 // don't touch below this line
 
 const bootdevURL = 'https://boot.dev/learn/learn-python'
 const domainName = getDomainNameFromURL(bootdevURL)
 console.log(`The domain name for ${bootdevURL} is ${domainName}`)
 
/* 
 SECTIONS OF A URL
URLs have quite a few sections, some of which are required, others not.

ASSIGNMENT
Let's use the URL API again. This time, we'll parse a URL and print all the different parts. We'll learn more about each part later, for now, let's just split and print a URL!

Complete the printURLParts function. It should print all the parts of a URL. For example, given this URL:

http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash

Your code should print:

protocol: http:
username: testuser
password: testpass
hostname: testdomain.com
port: 8080
pathname: /testpath
search: ?testsearch=testvalue
hash: #testhash

Use the following properties on the URL object:

protocol
username
password
hostname
port
pathname
search
hash */

function printURLParts(urlString) {
  const urlObj = new URL(urlString)
  //properties of the URL OBJECT
  console.log(`protocol is: ${urlObj.protocol}`);//console returns http:
  console.log(`username is : ${urlObj.username}`);//console returns dragonslayer
  console.log(`password: ${urlObj.password}`);//console returns pwn3d
  console.log(`hostname :${urlObj.hostname}`);//console returns fantasyquest.com
  console.log(`port :${urlObj.port}`);//console returns 8080
  console.log(`pathname: ${urlObj.pathname}`);//console returns /maps
  console.log(urlObj.search);//console returns ?sort=rank
}

// don't touch below this line

const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'


printURLParts(fantasyQuestURL);

/* The "protocol", also referred to as the "scheme", is the first component of a URL. Its purpose is to define the rules by which the data being communicated is displayed, encoded or formatted.

Some examples of different URL protocols:

http
ftp
mailto
https
For example:

http://example.com
mailto:noreply@fantasyquest.app
NOT ALL SCHEMES REQUIRE A "//"
The "http" in a URL is always followed by :
 */

//. All URLs have the colon, but the // part is only included for schemes that have an authority component. As you can see above, the mailto scheme doesn't use an authority component, so it doesn't need the slashes.

/* QUIZ */

/* In the Fantasy Quest game menu, we show users the email addresses of their friends. We need that email to be a clickable hyperlink. When they click the hyperlink their default email client should open with a new message ready to send to the address they clicked on.

Complete the getMailtoLinkForEmail function. It should return a "mailto" hyperlink for the given email. */

function getMailtoLinkForEmail(email) {
  console.log(email)
  return email;
}

// don't touch below this line

let email = 'slayer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
email = 'killer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)

getMailtoLinkForEmail(email);


/* ASYNCHRONOUS/SYNCHRONOUS */


const waitTimeMs = 1000
console.log("I print first");
console.log("I print second");
console.log("I print third");

setTimeout(()=>{
  console.log(`print me after ${waitTimeMs} milliseconds`)
},1000)

console.log("I print fourth");
console.log("I print fifth");