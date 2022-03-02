
'use strict'

$(function() {

  const $ul = $('ul')
  const $title = $('.title-text')
  const $amount = $('.title-text .amount')
  const item = {
    one: 'Buy Milk',
    two: 'Pay Phone Bill',
    three: 'Eat Vegetable'
  }

  // render and show todo item
  $ul.html(function() {
    let content = ''
    for (let i in item) {
      content += `<li>${item[i]}</li>`
    }
    return content
  })
  const $li = $('ul li')
  $li.hide().each(function (index) {
    $(this).delay(500 * index).fadeIn(700)
  })

  // show title
  $title.hide().fadeIn(1000)
  $amount.animate({
    marginLeft: '+=15'
  }, 1700, function() {
    $(this).css('margin-left', '-=15')
  })

  

})