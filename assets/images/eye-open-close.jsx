import React from 'react';

function EyeOpenClose(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';
	const css = `.nc-int-eye-open-close{--transition-duration:.3s;perspective:100px}.nc-int-eye-open-close :nth-child(1){transform-origin:16px 22px;transition:transform var(--transition-duration) cubic-bezier(.65,.05,.36,1)}.nc-int-eye-open-close :nth-child(3){transform-origin:50% 26.6%;transition:transform var(--transition-duration) cubic-bezier(.65,.05,.36,1)}.nc-int-eye-open-close :nth-child(4),.nc-int-eye-open-close :nth-child(5),.nc-int-eye-open-close :nth-child(6),.nc-int-eye-open-close :nth-child(7){transform-origin:50% 26.6%;transition:transform var(--transition-duration) cubic-bezier(.65,.05,.36,1),opacity 0s calc(var(--transition-duration)/2)}.nc-int-eye-open-close.nc-int-icon-state-b :nth-child(1){transform:scale(0)}.nc-int-eye-open-close.nc-int-icon-state-b :nth-child(3),.nc-int-eye-open-close.nc-int-icon-state-b :nth-child(4),.nc-int-eye-open-close.nc-int-icon-state-b :nth-child(5),.nc-int-eye-open-close.nc-int-icon-state-b :nth-child(6),.nc-int-eye-open-close.nc-int-icon-state-b :nth-child(7){transform:rotateX(180deg);opacity:1}`;

	function handleClick(e) {
		let group = e.currentTarget.querySelector('.js-nc-int-icon');
		if(!group) return;
		group.classList.toggle('nc-int-icon-state-b');
		e.currentTarget.dispatchEvent(new Event('ncstatechanged'));
	}

	return (
		<svg onClick={handleClick} height={height} width={width} viewBox="-14 -15 60 60" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2">
		<g className="js-nc-int-icon nc-int-icon-state-b nc-int-eye-open-close">
			<circle cx="16" cy="16" r="5" stroke="none"/>
			<path d="M2,16s6,8,14,8,14-8,14-8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M2,16S8,8,16,8s14,8,14,8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
			<line fill="none" opacity="0" stroke={fill} strokeLinecap="butt" x1="12.768" x2="11.563" y1="8.427" y2="4.583"/>
			<line fill="none" opacity="0" stroke={fill} strokeLinecap="butt" x1="19.232" x2="20.437" y1="8.427" y2="4.583"/>
			<line fill="none" opacity="0" stroke={fill} strokeLinecap="butt" x1="6.563" x2="4.141" y1="11.563" y2="8.482"/>
			<line fill="none" opacity="0" stroke={fill} strokeLinecap="butt" x1="25.437" x2="27.859" y1="11.563" y2="8.482"/>
		</g>
		<style strokeLinecap="butt">{css}</style>
	</g>
</svg>
	);
};

export default EyeOpenClose;