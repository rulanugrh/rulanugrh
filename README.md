<div align='center'>
  <img src=https://i.pinimg.com/originals/2d/79/a2/2d79a22c6a7902c41866fe4badebe98e.gif>
</div>

&nbsp;

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>


# About Me
```go
// is about me , nothing special :u
package main
import (
  "fmt"
  "strings"
)

type Data struct{
  name string
  hobby []string
}
type Result func(int)string

func (dat Data) isMyProfile(){
  fmt.Println("My Name is", dat.name)
  fmt.Println("My hobby is", strings.Join(dat.hobby, " and "))
}

func isStart(num int, res Result){
  result := res(num)
  fmt.Println("And then,", result)
}

func isMyAge(num int)string{
  if num > 17{
    return "I'm a teenager"
  }else{
    return "I'm still underage"
  }
}

func main(){
  defer isStart(16, isMyAge)
  profile := Data{
    name: "Kiyotaka",
    hobby: []string{"Coding", "Basket"},
  }
  profile.isMyProfile()
}
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>

# Technology Used

![Linux](https://img.shields.io/badge/Linux-black?style=for-the-badge&logo=Linux&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=Docker&logoColor=white)
![Bash](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>

# My Stats


<table border="0" align="center">
<tr border="0">
<td width="50%" align="center">
  
  <img  align="center"  src="https://github-readme-stats.vercel.app/api?username=ItsArul&theme=tokyonight&show_icons=true&count_private=true" />
  <br></br>
  <img  title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Mark streak" src="https://github-readme-streak-stats.herokuapp.com/?user=ItsArul&theme=tokyonight&hide_border=true" />


  
</td>

<td width="50%" align="center">

  <img  align="center"  src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=ItsArul&theme=tokyonight&hide_border=true&no-bg=true&no-frame=true&langs_count=10"/>
  
  </td>
</tr>
</table>


<p  align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>

