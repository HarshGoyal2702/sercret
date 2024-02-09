export function slideInFromLeft(delay : number){
    return{
        hidden:{x: -100,opacity :0},
        visible:{
            x:0,
            opacity:1,
            transition:{
                delay:delay,
                duration:0.5,

            },
        }, 
      };
}

export function slideInFromRight( delay: number){
    return{
        hidden:{x: 100,opacity :0},
        visible:{
            x:0,
            opacity:1,
            transition:{
                delay: delay,
                duration:0.5,
            },
        }, 
      };
}


export const slideFromTop = {
    hidden: { y: "-100%" },
    visible: (i: any) => ({
      y: "0",
      transition: {
        delay: i * 0.2, // delay each element by 0.2 seconds
      },
    }),
    exit: { y: "-100%" },
  };
  
  export const slideFromBottom = {
    hidden: { y: "100%", rotate: 0, scaleY: 1 },
    visible: (i: any) => ({
      y: "0",
      scaleY: -1,
      transition: {
        delay: i * 0.2, // delay each element by 0.2 seconds
      },
    }),
    exit: { y: "100%", rotate: 0, scaleY: 1 },
  };