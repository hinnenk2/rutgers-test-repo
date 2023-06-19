module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(    //enables handlebars display upon starting the app
        date
      ).getFullYear()}`;
    },
    format_plural: (word, amount) => {    //required for user to enter a comment and save as string
        if (amount !== 1) {
          return `${word}s`;
        }
    
        
    }
  }