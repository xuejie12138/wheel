export default (el) => {
	let offset = 10; //希望图片距离底部多少时加载
	
	//获取需要懒加载的元素

	let nodes = document.querySelectorAll('[data-src]');
	
	//判断元素是否出现在视口
	let inView = (ele) => {
		let rect = ele.getBoundingClientRect();
		// console.log(ele)
		if(rect.top >= 0 && rect.top < window.innerHeight + offset && (rect.left >= 0 &&rect.left <= window.innerWidth) && (rect.right >= 0 && rect.right <= window.innerWidth)){
			return true
		}
		return false
	}

	//判断是否加载过
	let isDeal = (ele) => {
		return ele.src === ele.dataset.src
	}
	//遍历元素
	let load = () => {
		nodes.forEach((item) => {
			if (inView(item) && !isDeal(item)){
                item.src = item.dataset.src;
            }
		})
	}
	// console.log(nodes)
	load()
	// console.log(el)
	document.querySelector(el).addEventListener('scroll', load)
}
