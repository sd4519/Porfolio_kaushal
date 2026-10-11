import { useEffect, useRef } from 'react';
import './BoxDrop.css';
import { portfolioSkills, portfolioTools } from './portfolioContent.js';

export default function BoxDrop() {
  const host = useRef(null);
  const section = useRef(null);
  useEffect(() => {
    const element = host.current;
    let cleanup = () => {};
    let disposed = false;
    let started = false;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const T = await import('three');
      const { RoundedBoxGeometry } = await import('three/addons/geometries/RoundedBoxGeometry.js');
      if (disposed) return;
      let renderer;
      try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true }); }
      catch { element.dataset.fallback = 'true'; return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = T.PCFSoftShadowMap;
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      element.appendChild(renderer.domElement);
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(36, 1, .1, 60);
      camera.position.set(5.5, 4.4, 9);
      camera.lookAt(0, 2.8, 0);
      scene.add(new T.HemisphereLight(0xffffff, 0x8c7964, 2.2));
      const light = new T.DirectionalLight(0xfff2dc, 4);
      light.position.set(-3, 7, 5); light.castShadow = true;
      light.shadow.mapSize.set(1024, 1024);
      Object.assign(light.shadow.camera, { left: -6, right: 6, top: 9, bottom: -6 });
      light.shadow.normalBias = .025; light.shadow.radius = 4;
      scene.add(light);
      const fill = new T.DirectionalLight(0xc8d6ff, 1.2); fill.position.set(4, 3, -3); scene.add(fill);
      const floor = new T.Mesh(new T.PlaneGeometry(200, 200), new T.ShadowMaterial({ opacity: .18 }));
      floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
      const textures = [];
      const texture = (kind) => {
        const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#003ffd'; ctx.fillRect(0, 0, 1024, 1024);
        const pixels = ctx.getImageData(0, 0, 1024, 1024);
        for (let i = 0; i < pixels.data.length; i += 4) {
          const grain = (Math.random() - .5) * 20;
          pixels.data[i] += grain; pixels.data[i + 1] += grain; pixels.data[i + 2] += grain;
        }
        ctx.putImageData(pixels, 0, 0);
        for (let i = 0; i < 10000; i++) {
          ctx.strokeStyle = Math.random() > .5 ? 'rgba(0,16,80,.12)' : 'rgba(210,226,255,.12)';
          const x = Math.random() * 1024, y = Math.random() * 1024;
          ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x + Math.random()*8, y+Math.random()*3); ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(0,18,86,.25)'; ctx.lineWidth = 3; ctx.strokeRect(10,10,1004,1004);
        if (kind === 'front') {
          ctx.fillStyle = '#ffffff'; ctx.font = '600 90px Arial'; ctx.fillText('Kaushal.', 110, 420);
          ctx.fillStyle = '#ffffff'; ctx.font = '24px Arial'; ctx.fillText('PRECISE THINKING / PURPOSEFUL EXECUTION', 110, 470);
          ctx.font = '22px Arial'; ctx.fillText('PORTFOLIO — HANDLE WITH CARE', 110, 820);
          for(let x = 700; x < 915; x += 5) { ctx.fillRect(x, 725, Math.random() > .5 ? 2 : 4, 90); }
        }
        if (kind === 'top') {
          ctx.fillStyle = '#001c79'; ctx.fillRect(0,509,1024,6);
          ctx.fillStyle = 'rgba(105,145,255,.55)'; ctx.fillRect(0,463,1024,98);
          ctx.strokeStyle = 'rgba(221,234,255,.25)'; ctx.lineWidth=2;
          for(let i=0;i<30;i++) { const y=466+Math.random()*92; ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(1024,y);ctx.stroke(); }
        }
        const map = new T.CanvasTexture(canvas); map.colorSpace=T.SRGBColorSpace; map.anisotropy=4; textures.push(map); return map;
      };
      const plain = texture('plain'), front = texture('front'), top = texture('top');
      const makeMaterial = map => new T.MeshStandardMaterial({ map, bumpMap: plain, bumpScale: .025, roughness: .93 });
      const mats = [makeMaterial(plain), makeMaterial(plain), makeMaterial(top), makeMaterial(plain), makeMaterial(front), makeMaterial(plain)];
      const box = new T.Group(); box.rotation.y = -.28; scene.add(box);
      const wall = (w,h,d,x,y,z,material) => {
        const mesh = new T.Mesh(new RoundedBoxGeometry(w,h,d,2,.012),material);
        mesh.position.set(x,y,z); mesh.castShadow=mesh.receiveShadow=true; box.add(mesh);
      };
      wall(2.35,.05,1.9,0,-.85,0,mats[0]);
      wall(.05,1.75,1.9,-1.15,0,0,mats[0]);wall(.05,1.75,1.9,1.15,0,0,mats[0]);
      wall(2.35,1.75,.05,0,0,.925,mats[4]);wall(2.35,1.75,.05,0,0,-.925,mats[0]);
      const flaps=[];
      for (const side of [-1,1]) {
        const hinge=new T.Group(); hinge.position.set(0,.875,side*.95);box.add(hinge);
        const flap=new T.Mesh(new RoundedBoxGeometry(2.35,.035,.95,2,.01),mats[2]);
        flap.position.z=-side*.475;flap.castShadow=flap.receiveShadow=true;hinge.add(flap);
        flaps.push({hinge,side,axis:'x'});
      }
      for (const side of [-1,1]) {
        const hinge=new T.Group();hinge.position.set(side*1.175,.84,0);box.add(hinge);
        const flap=new T.Mesh(new RoundedBoxGeometry(1.175,.035,1.85,2,.01),mats[0]);
        flap.position.x=-side*.5875;flap.castShadow=flap.receiveShadow=true;hinge.add(flap);
        flaps.push({hinge,side,axis:'z'});
      }
      const toolObjects=portfolioTools.map(tool=>{
        const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
        const ctx=canvas.getContext('2d');ctx.fillStyle=tool.color;ctx.fillRect(0,0,256,256);
        ctx.strokeStyle=tool.ink;ctx.lineWidth=6;ctx.strokeRect(18,18,220,220);
        ctx.fillStyle=tool.ink;ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.font=`600 ${tool.mark.length>2?68:108}px ${tool.mark==='W'?'Georgia':'Arial'}`;ctx.fillText(tool.mark,128,137);
        const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;textures.push(map);
        const edge=new T.MeshStandardMaterial({color:tool.color,roughness:.4,metalness:.12});
        const face=new T.MeshStandardMaterial({map,roughness:.48,metalness:.05});
        const mesh=new T.Mesh(new RoundedBoxGeometry(.56,.56,.12,3,.045),[edge,edge,edge,edge,face,edge]);
        mesh.castShadow=true;mesh.visible=false;scene.add(mesh);
        return {mesh,target:new T.Vector3()};
      });
      let opening=0;
      const updateContents=()=>{
        flaps.forEach(({hinge,side,axis})=>hinge.rotation[axis]=(axis==='x'?-side:side)*opening*2.35);
        section.current.style.setProperty('--unpack',String(T.MathUtils.smoothstep(opening,.2,.95)));
        toolObjects.forEach(({mesh,target},i)=>{
          const r=T.MathUtils.smoothstep(opening,.2+i*.025,.75+i*.025);
          mesh.visible=r>0;
          mesh.position.copy(new T.Vector3(0,1.5,0).lerp(target,r));
          mesh.position.y+=Math.sin(r*Math.PI)*.7;
          mesh.scale.setScalar((mesh.userData.baseScale||1)*(.35+.65*r));
          mesh.rotation.set((1-r)*.7,.18+(1-r)*1.4,(1-r)*-.5);
        });
      };
      const dustCanvas=document.createElement('canvas'); dustCanvas.width=dustCanvas.height=128;
      const dc=dustCanvas.getContext('2d'); const gradient=dc.createRadialGradient(64,64,0,64,64,64);
      gradient.addColorStop(0,'rgba(160,139,112,.35)'); gradient.addColorStop(.45,'rgba(160,139,112,.18)'); gradient.addColorStop(1,'rgba(160,139,112,0)');
      dc.fillStyle=gradient; dc.fillRect(0,0,128,128);
      const dustMap=new T.CanvasTexture(dustCanvas); textures.push(dustMap);
      const dust=Array.from({length:32},(_,i)=>{
        const material=new T.SpriteMaterial({map:dustMap,transparent:true,opacity:0,depthWrite:false});
        const sprite=new T.Sprite(material); scene.add(sprite);
        return {sprite, angle:i/32*Math.PI*2, speed:.8+Math.random()*1.4, size:.65+Math.random()*.7};
      });
      const motion=matchMedia('(prefers-reduced-motion: reduce)');
      let frame=0, elapsed=0, last=0, visible=true;
      const render=()=>renderer.render(scene,camera);
      const size=()=>{
        const origin=element.getBoundingClientRect();const {width,height}=origin;
        renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();camera.updateMatrixWorld();
        box.scale.setScalar(width<768?.6:1);
        section.current.querySelectorAll('.tool-object-anchor').forEach((anchor,i)=>{
          const b=anchor.getBoundingClientRect();
          const point=new T.Vector3((b.left+b.width/2-origin.left)/width*2-1,-(b.top+b.height/2-origin.top)/height*2+1,.5).unproject(camera);
          const ray=point.sub(camera.position).normalize();
          toolObjects[i].target.copy(camera.position).addScaledVector(ray,-camera.position.z/ray.z);
          toolObjects[i].mesh.userData.baseScale=b.width/height*12;
        });updateContents();render();
      };
      const resize=new ResizeObserver(size); resize.observe(element);
      const settle=()=>{box.position.y=.875*box.scale.y;box.rotation.set(0,-.28,0);dust.forEach(d=>d.sprite.material.opacity=0); updateContents();render();};
      const tick=time=>{
        frame=0; if(disposed || !visible || document.hidden) {last=0;return;}
        if(motion.matches){settle();return;}
        if(last)elapsed+=Math.min((time-last)/1000,.05);last=time;
        const fall=Math.min(elapsed/1.05,1);
        box.position.y=.875*box.scale.y+7.5*(1-fall*fall);
        box.rotation.set(.09*(1-fall),-.28+.1*(1-fall),-.12*(1-fall));
        const impact=elapsed-1.05;
        if(impact>=0){
          box.position.y=.875*box.scale.y+.2*Math.abs(Math.sin(impact*11))*Math.exp(-impact*5);
          box.rotation.z=.045*Math.sin(impact*13)*Math.exp(-impact*5);
          dust.forEach(d=>{const travel=1.15+d.speed*(1-Math.exp(-impact*1.5));d.sprite.position.set(Math.cos(d.angle)*travel,.07+Math.sin(Math.min(impact/2,1)*Math.PI)*.35,Math.sin(d.angle)*travel*.75);d.sprite.scale.setScalar(d.size*(.3+impact*.8));d.sprite.material.opacity=Math.min(impact*7,1)*Math.exp(-impact*1.5);});
        }
        if(elapsed>1.35)updateContents();render(); if(elapsed<4.5)frame=requestAnimationFrame(tick);else settle();
      };
      const wake=()=>{if(!frame && elapsed<4.5 && visible && !document.hidden)frame=requestAnimationFrame(tick);};
      const visibility=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)wake();else {cancelAnimationFrame(frame);frame=0;last=0;}});visibility.observe(element);
      let scrollFrame=0;
      const onScroll=()=>{if(scrollFrame)return;scrollFrame=requestAnimationFrame(()=>{
        scrollFrame=0;
        const rect=section.current.getBoundingClientRect();
        const progress=T.MathUtils.clamp(-rect.top/Math.max(1,rect.height-element.clientHeight),0,1);
        opening=motion.matches?1:T.MathUtils.smoothstep(progress,.06,.82);
        if(elapsed>=1.35||motion.matches){updateContents();render();}
      });};
      window.addEventListener('scroll',onScroll,{passive:true});
      const onMotion=()=>{if(motion.matches){cancelAnimationFrame(frame);frame=0;elapsed=4.5;opening=1;settle();}else {onScroll();wake();}};
      const onVisibility=()=>{last=0;if(document.hidden){cancelAnimationFrame(frame);frame=0;}else wake();};
      motion.addEventListener('change',onMotion);document.addEventListener('visibilitychange',onVisibility);
      size();onScroll();if(motion.matches){elapsed=4.5;opening=1;settle();}else wake();
      cleanup=()=>{window.removeEventListener('scroll',onScroll);cancelAnimationFrame(scrollFrame);cancelAnimationFrame(frame);resize.disconnect();visibility.disconnect();motion.removeEventListener('change',onMotion);document.removeEventListener('visibilitychange',onVisibility);scene.traverse(object=>{object.geometry?.dispose();if(object.material){(Array.isArray(object.material)?object.material:[object.material]).forEach(m=>m.dispose());}});textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
    },{threshold:.25});
    observer.observe(element);
    return ()=>{disposed=true;observer.disconnect();cleanup();};
  },[]);
  return <section ref={section} className="box-drop-section" aria-label="Unpack my skills and tools">
    <div className="box-drop-sticky">
      <div ref={host} className="box-drop-stage" aria-hidden="true"><div className="box-drop-fallback">Kaushal.</div></div>
      <div className="unpack-heading"><p className="eyebrow">Inside the box</p><h2>What I bring.</h2><p>Scroll to unpack my skills &amp; tools.</p></div>
      <div className="unpack-column unpack-skills"><p className="eyebrow">01 / Skills</p><ul>{portfolioSkills.map(skill=><li key={skill}>{skill}</li>)}</ul></div>
      <div className="unpack-column unpack-tools"><p className="eyebrow">02 / Software &amp; tools</p><ul>{portfolioTools.map(tool=><li key={tool.name}><span className="tool-object-anchor" aria-hidden="true" /><span>{tool.name}</span></li>)}</ul></div>
    </div>
  </section>;
}

