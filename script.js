function toggle(i){
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel, index)=>{
    panel.style.display =
      index === i && panel.style.display !== 'block'
        ? 'block'
        : 'none';
  });
}
