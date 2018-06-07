# The Kiln - Fire It Up!

### Dependencies
node

### Getting Started
```
    > git clone https://github.com/dannytpeck/the-kiln.git
    > cd the-kiln
    > npm install
    > npm start
```

### Known Issues
- Changes to Self-Report Resources and Coaching do not cause the <xmp> to be re-rendered. Only editing the Short Description, Tagline, and Long Description cause a re-render of the <xmp>
- Select Challenge Type option select only works twice. If you try to switch from CIE -> Self-Report -> CIE (or vice versa), the app gives component mounting errors. I'm not sure why this is. For now it's easily mitigated with a page refresh.
- The Toggle Targeting button does not work (this is a new bug, will need to be be fixed later. I've made the targeting details visible by default as a hotfix)
