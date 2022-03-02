
'use strict'

$(function() {

  const $ul = $('ul')
  const $title = $('.title-text')
  const $amount = $('.title-text .amount')
  const $start = $('.start-btn')
  const $add = $('.add')
  const $input = $('.add input')
  const $addBtn = $('.add .add-btn')
  let item = ['Buy Milk', 'Pay Phone Bill', 'Eat Vegetable']

  // render todo item 
  function renderTodoList(data) {
    let content = ''
    data.forEach(li => {
      content += `<li>${li}</li>`
    })
    return content
  }
  // render and show todo item
  $ul.html(renderTodoList(item))
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

  // start to add item
  $start.on('click', function (event) {
    $(this).hide()
    $add.slideDown(700)
  })

  // add item to ToDo list
  $addBtn.on('click', function () {
    const value = $input.val()
    if (value.length > 25) return alert('字數請控制在 25 以內')
    if (value.trim()) {
      item.push(value)
      $ul.html(renderTodoList(item))
    }
  })

  

})