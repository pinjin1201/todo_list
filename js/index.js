
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

  // add todo item
  function addTodoItem(data) {
    if (data.trim()) {
      item.push(data)
      $ul.html(renderTodoList(item))
      $input.val('')
    }
  }

  // add delete style
  function addDeleteStyle(item) {
    const liText = item.text()
    item.text(`✂ ${liText}`)
    item.css('background-color', '#a9a9a9')
    item.attr('class', 'delete')
  }

  // renew amount text
  function renewAmount() {
    const li = $ul.children().length
    $amount.text(li)
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
    let value = $input.val()
    if (value.length > 25) return alert('字數請控制在 25 以內')

    addTodoItem(value)
    renewAmount()
  })

  // add delete style
  $ul.on('click', 'li', function(event) {
    const $this = $(this)
    const deleteItem = $this.attr('class')
    if (deleteItem === 'delete') return
    
    addDeleteStyle($this)
  })

  // remove todo item
  $ul.on('click', '.delete', function(event) {
    const $this = $(this)
    const text = $this.text().slice(2)
    const number = item.findIndex(name => name === text)
    item.splice(number, 1)
    
    $this.animate({marginLeft: '+=50'}, 400, function() {
      $this.fadeOut(100).remove()
      renewAmount()
    })
  })

})