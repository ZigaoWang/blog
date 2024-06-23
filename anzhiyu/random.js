var posts=["2024/hello-world/","2024/internet-history/","2023/github-video/","2024/cpu-architectures/","2024/y6-eng-sci-review/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };