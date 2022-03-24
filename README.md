<div align='center'>
  <img src=https://i.pinimg.com/originals/2d/79/a2/2d79a22c6a7902c41866fe4badebe98e.gif>
</div>

&nbsp;

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>


# About Me
```go
// is about me, nothing special :u

package main

import (
	"encoding/json"
	"fmt"
)

type Profile struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func (prof Profile) MyProfile(number int, myage func(int) string) {
	prof.Age = number
	res, err := json.MarshalIndent(prof, "", " ")
	if err != nil {
		panic(err)
	}

	fmt.Print(string(res) + "\n")
	fmt.Println(myage(number))

}
func main() {

	profile := Profile{
		Name: "Kiyo",
	}

	profile.MyProfile(18, func(i int) string {
		if i > 17 {
			return "I'm Teenager"
		} else {
			return "I'm Children"
		}
	})
}
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>



# My Stats


<table border="0" align="center">
<tr border="0">
<td width="50%" align="center">
  
  <img  align="center"  src="https://github-readme-stats.vercel.app/api?username=ItsArul&theme=tokyonight&show_icons=true&count_private=true" />
  <br></br>
</td>
<td width="50%" align="center">
  <img  align="center"  title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Mark streak" src="https://github-readme-streak-stats.herokuapp.com/?user=ItsArul&theme=tokyonight&hide_border=true" />
</td>
</tr>
</table>


<p  align="center">
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></p>

