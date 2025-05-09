"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [444], {
        2248: function(e, t, n) {
            n.d(t, {
                AL: function() {
                    return _
                },
                CD: function() {
                    return M
                },
                DD: function() {
                    return J
                },
                Dd: function() {
                    return Ie
                },
                F9: function() {
                    return ve
                },
                H5: function() {
                    return N
                },
                HN: function() {
                    return c
                },
                JL: function() {
                    return ee
                },
                M4: function() {
                    return Ce
                },
                Uy: function() {
                    return he
                },
                Xs: function() {
                    return Se
                },
                YH: function() {
                    return ae
                },
                YQ: function() {
                    return R
                },
                at: function() {
                    return Z
                },
                fY: function() {
                    return pe
                },
                gh: function() {
                    return V
                },
                hB: function() {
                    return Re
                },
                ol: function() {
                    return $
                },
                p$: function() {
                    return le
                },
                rk: function() {
                    return j
                },
                wL: function() {
                    return Ae
                },
                xC: function() {
                    return K
                },
                xV: function() {
                    return oe
                },
                xs: function() {
                    return S
                },
                zo: function() {
                    return q
                }
            });
            var i = n(9477),
                r = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",
                s = class extends i.ShaderMaterial {
                    constructor() {
                        super({
                            name: "AdaptiveLuminanceMaterial",
                            defines: {
                                MIP_LEVEL_1X1: "0.0"
                            },
                            uniforms: {
                                luminanceBuffer0: new i.Uniform(null),
                                luminanceBuffer1: new i.Uniform(null),
                                minLuminance: new i.Uniform(.01),
                                deltaTime: new i.Uniform(0),
                                tau: new i.Uniform(1)
                            },
                            extensions: {
                                shaderTextureLOD: !0
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <packing>\n#define packFloatToRGBA(v) packDepthToRGBA(v)\n#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)\nuniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));\n#if __VERSION__ < 300\nfloat l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;\n#else\nfloat l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;\n#endif\nl0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}",
                            vertexShader: r
                        }), this.toneMapped = !1
                    }
                    set luminanceBuffer0(e) {
                        this.uniforms.luminanceBuffer0.value = e
                    }
                    setLuminanceBuffer0(e) {
                        this.uniforms.luminanceBuffer0.value = e
                    }
                    set luminanceBuffer1(e) {
                        this.uniforms.luminanceBuffer1.value = e
                    }
                    setLuminanceBuffer1(e) {
                        this.uniforms.luminanceBuffer1.value = e
                    }
                    set mipLevel1x1(e) {
                        this.defines.MIP_LEVEL_1X1 = e.toFixed(1), this.needsUpdate = !0
                    }
                    setMipLevel1x1(e) {
                        this.mipLevel1x1 = e
                    }
                    set deltaTime(e) {
                        this.uniforms.deltaTime.value = e
                    }
                    setDeltaTime(e) {
                        this.uniforms.deltaTime.value = e
                    }
                    get minLuminance() {
                        return this.uniforms.minLuminance.value
                    }
                    set minLuminance(e) {
                        this.uniforms.minLuminance.value = e
                    }
                    getMinLuminance() {
                        return this.uniforms.minLuminance.value
                    }
                    setMinLuminance(e) {
                        this.uniforms.minLuminance.value = e
                    }
                    get adaptationRate() {
                        return this.uniforms.tau.value
                    }
                    set adaptationRate(e) {
                        this.uniforms.tau.value = e
                    }
                    getAdaptationRate() {
                        return this.uniforms.tau.value
                    }
                    setAdaptationRate(e) {
                        this.uniforms.tau.value = e
                    }
                };
            var a = class extends i.ShaderMaterial {
                    constructor(e = new i.Vector2) {
                        super({
                            name: "KawaseBlurMaterial",
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                texelSize: new i.Uniform(new i.Vector2),
                                halfTexelSize: new i.Uniform(new i.Vector2),
                                kernel: new i.Uniform(0),
                                scale: new i.Uniform(1)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <common>\n#include <dithering_pars_fragment>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;\n#include <encodings_fragment>\n#include <dithering_fragment>\n}",
                            vertexShader: "uniform vec2 texelSize;uniform vec2 halfTexelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize*vec2(kernel)+halfTexelSize)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.toneMapped = !1, this.setTexelSize(e.x, e.y)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.inputBuffer = e
                    }
                    get scale() {
                        return this.uniforms.scale.value
                    }
                    set scale(e) {
                        this.uniforms.scale.value = e
                    }
                    getScale() {
                        return this.uniforms.scale.value
                    }
                    setScale(e) {
                        this.uniforms.scale.value = e
                    }
                    getKernel() {
                        return null
                    }
                    get kernel() {
                        return this.uniforms.kernel.value
                    }
                    set kernel(e) {
                        this.uniforms.kernel.value = e
                    }
                    setKernel(e) {
                        this.kernel = e
                    }
                    setTexelSize(e, t) {
                        this.uniforms.texelSize.value.set(e, t), this.uniforms.halfTexelSize.value.set(e, t).multiplyScalar(.5)
                    }
                    setSize(e, t) {
                        const n = this.uniforms;
                        n.texelSize.value.set(1 / e, 1 / t), n.halfTexelSize.value.copy(n.texelSize.value).multiplyScalar(.5)
                    }
                },
                o = class extends i.ShaderMaterial {
                    constructor() {
                        super({
                            name: "CopyMaterial",
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                opacity: new i.Uniform(1)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nuniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;\n#include <encodings_fragment>\n}",
                            vertexShader: r
                        }), this.toneMapped = !1
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    getOpacity(e) {
                        return this.uniforms.opacity.value
                    }
                    setOpacity(e) {
                        this.uniforms.opacity.value = e
                    }
                },
                l = class extends i.ShaderMaterial {
                    constructor() {
                        super({
                            name: "DepthDownsamplingMaterial",
                            defines: {
                                DEPTH_PACKING: "0"
                            },
                            uniforms: {
                                depthBuffer: new i.Uniform(null),
                                normalBuffer: new i.Uniform(null),
                                texelSize: new i.Uniform(new i.Vector2)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <packing>\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\n#ifdef DOWNSAMPLE_NORMALS\nuniform lowp sampler2D normalBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])/4.0;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);\n#ifdef DOWNSAMPLE_NORMALS\nvec2 uvs[4];uvs[0]=vUv0;uvs[1]=vUv1;uvs[2]=vUv2;uvs[3]=vUv3;vec3 n=texture2D(normalBuffer,uvs[index]).rgb;\n#else\nvec3 n=vec3(0.0);\n#endif\ngl_FragColor=vec4(n,d[index]);}",
                            vertexShader: "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.toneMapped = !1
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = i.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    set normalBuffer(e) {
                        this.uniforms.normalBuffer.value = e, null !== e ? this.defines.DOWNSAMPLE_NORMALS = "1" : delete this.defines.DOWNSAMPLE_NORMALS, this.needsUpdate = !0
                    }
                    setNormalBuffer(e) {
                        this.normalBuffer = e
                    }
                    setTexelSize(e, t) {
                        this.uniforms.texelSize.value.set(e, t)
                    }
                    setSize(e, t) {
                        this.uniforms.texelSize.value.set(1 / e, 1 / t)
                    }
                },
                c = {
                    DEPTH: 0,
                    LUMA: 1,
                    COLOR: 2
                },
                u = 0,
                d = class extends i.ShaderMaterial {
                    constructor(e = new i.Vector2, t = c.COLOR) {
                        super({
                            name: "EdgeDetectionMaterial",
                            defines: {
                                LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0",
                                EDGE_THRESHOLD: "0.1",
                                DEPTH_THRESHOLD: "0.01",
                                PREDICATION_MODE: "0",
                                PREDICATION_THRESHOLD: "0.01",
                                PREDICATION_SCALE: "2.0",
                                PREDICATION_STRENGTH: "1.0",
                                DEPTH_PACKING: "0"
                            },
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                depthBuffer: new i.Uniform(null),
                                predicationBuffer: new i.Uniform(null),
                                texelSize: new i.Uniform(e)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;\n#if EDGE_DETECTION_MODE != 0\nvarying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;\n#endif\n#if EDGE_DETECTION_MODE == 1\n#include <common>\n#endif\n#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nfloat readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}\n#elif PREDICATION_MODE == 2\nuniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}\n#endif\n#if PREDICATION_MODE != 0\nvec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}\n#endif\n#if EDGE_DETECTION_MODE != 0\nuniform sampler2D inputBuffer;\n#endif\nvoid main(){\n#if EDGE_DETECTION_MODE == 0\nconst vec2 threshold=vec2(DEPTH_THRESHOLD);\n#elif PREDICATION_MODE != 0\nvec2 threshold=calculatePredicatedThreshold();\n#else\nconst vec2 threshold=vec2(EDGE_THRESHOLD);\n#endif\n#if EDGE_DETECTION_MODE == 0\nvec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);\n#elif EDGE_DETECTION_MODE == 1\nfloat l=linearToRelativeLuminance(texture2D(inputBuffer,vUv).rgb);float lLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv0).rgb);float lTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=linearToRelativeLuminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=linearToRelativeLuminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);\n#elif EDGE_DETECTION_MODE == 2\nvec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);\n#endif\n}",
                            vertexShader: "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;\n#if EDGE_DETECTION_MODE != 0\nvarying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;\n#endif\nvoid main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);\n#if EDGE_DETECTION_MODE != 0\nvUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);\n#endif\ngl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.toneMapped = !1, this.edgeDetectionMode = t
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = i.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    get edgeDetectionMode() {
                        return Number(this.defines.EDGE_DETECTION_MODE)
                    }
                    set edgeDetectionMode(e) {
                        this.defines.EDGE_DETECTION_MODE = e.toFixed(0), this.needsUpdate = !0
                    }
                    getEdgeDetectionMode() {
                        return this.edgeDetectionMode
                    }
                    setEdgeDetectionMode(e) {
                        this.edgeDetectionMode = e
                    }
                    get localContrastAdaptationFactor() {
                        return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)
                    }
                    set localContrastAdaptationFactor(e) {
                        this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR = e.toFixed("6"), this.needsUpdate = !0
                    }
                    getLocalContrastAdaptationFactor() {
                        return this.localContrastAdaptationFactor
                    }
                    setLocalContrastAdaptationFactor(e) {
                        this.localContrastAdaptationFactor = e
                    }
                    get edgeDetectionThreshold() {
                        return Number(this.defines.EDGE_THRESHOLD)
                    }
                    set edgeDetectionThreshold(e) {
                        this.defines.EDGE_THRESHOLD = e.toFixed("6"), this.defines.DEPTH_THRESHOLD = (.1 * e).toFixed("6"), this.needsUpdate = !0
                    }
                    getEdgeDetectionThreshold() {
                        return this.edgeDetectionThreshold
                    }
                    setEdgeDetectionThreshold(e) {
                        this.edgeDetectionThreshold = e
                    }
                    get predicationMode() {
                        return Number(this.defines.PREDICATION_MODE)
                    }
                    set predicationMode(e) {
                        this.defines.PREDICATION_MODE = e.toFixed(0), this.needsUpdate = !0
                    }
                    getPredicationMode() {
                        return this.predicationMode
                    }
                    setPredicationMode(e) {
                        this.predicationMode = e
                    }
                    set predicationBuffer(e) {
                        this.uniforms.predicationBuffer.value = e
                    }
                    setPredicationBuffer(e) {
                        this.uniforms.predicationBuffer.value = e
                    }
                    get predicationThreshold() {
                        return Number(this.defines.PREDICATION_THRESHOLD)
                    }
                    set predicationThreshold(e) {
                        this.defines.PREDICATION_THRESHOLD = e.toFixed("6"), this.needsUpdate = !0
                    }
                    getPredicationThreshold() {
                        return this.predicationThreshold
                    }
                    setPredicationThreshold(e) {
                        this.predicationThreshold = e
                    }
                    get predicationScale() {
                        return Number(this.defines.PREDICATION_SCALE)
                    }
                    set predicationScale(e) {
                        this.defines.PREDICATION_SCALE = e.toFixed("6"), this.needsUpdate = !0
                    }
                    getPredicationScale() {
                        return this.predicationScale
                    }
                    setPredicationScale(e) {
                        this.predicationScale = e
                    }
                    get predicationStrength() {
                        return Number(this.defines.PREDICATION_STRENGTH)
                    }
                    set predicationStrength(e) {
                        this.defines.PREDICATION_STRENGTH = e.toFixed("6"), this.needsUpdate = !0
                    }
                    getPredicationStrength() {
                        return this.predicationStrength
                    }
                    setPredicationStrength(e) {
                        this.predicationStrength = e
                    }
                    setSize(e, t) {
                        this.uniforms.texelSize.value.set(1 / e, 1 / t)
                    }
                },
                h = {
                    FRAGMENT_HEAD: "FRAGMENT_HEAD",
                    FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
                    FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
                    VERTEX_HEAD: "VERTEX_HEAD",
                    VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
                },
                A = class extends i.ShaderMaterial {
                    constructor(e, t, n, r, s = !1) {
                        super({
                            name: "EffectMaterial",
                            defines: {
                                THREE_REVISION: i.REVISION.replace(/\D+/g, ""),
                                DEPTH_PACKING: "0",
                                ENCODE_OUTPUT: "1"
                            },
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                depthBuffer: new i.Uniform(null),
                                resolution: new i.Uniform(new i.Vector2),
                                texelSize: new i.Uniform(new i.Vector2),
                                cameraNear: new i.Uniform(.3),
                                cameraFar: new i.Uniform(1e3),
                                aspect: new i.Uniform(1),
                                time: new i.Uniform(0)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            dithering: s
                        }), this.toneMapped = !1, e && this.setShaderParts(e), t && this.setDefines(t), n && this.setUniforms(n), this.adoptCameraSettings(r)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    get depthBuffer() {
                        return this.uniforms.depthBuffer.value
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    get depthPacking() {
                        return Number(this.defines.DEPTH_PACKING)
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = i.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    setShaderParts(e) {
                        return this.fragmentShader = "#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#define packFloatToRGBA(v) packDepthToRGBA(v)\n#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nuniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;\n#if THREE_REVISION >= 137\nvec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}\n#endif\nfloat readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}float getViewZ(const in float depth){\n#ifdef PERSPECTIVE_CAMERA\nreturn perspectiveDepthToViewZ(depth,cameraNear,cameraFar);\n#else\nreturn orthographicDepthToViewZ(depth,cameraNear,cameraFar);\n#endif\n}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;\n#ifdef ENCODE_OUTPUT\n#include <encodings_fragment>\n#endif\n#include <dithering_fragment>\n}".replace(h.FRAGMENT_HEAD, e.get(h.FRAGMENT_HEAD)).replace(h.FRAGMENT_MAIN_UV, e.get(h.FRAGMENT_MAIN_UV)).replace(h.FRAGMENT_MAIN_IMAGE, e.get(h.FRAGMENT_MAIN_IMAGE)), this.vertexShader = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}".replace(h.VERTEX_HEAD, e.get(h.VERTEX_HEAD)).replace(h.VERTEX_MAIN_SUPPORT, e.get(h.VERTEX_MAIN_SUPPORT)), this.needsUpdate = !0, this
                    }
                    setDefines(e) {
                        for (const t of e.entries()) this.defines[t[0]] = t[1];
                        return this.needsUpdate = !0, this
                    }
                    setUniforms(e) {
                        for (const t of e.entries()) this.uniforms[t[0]] = t[1];
                        return this
                    }
                    setExtensions(e) {
                        this.extensions = {};
                        for (const t of e) this.extensions[t] = !0;
                        return this
                    }
                    get encodeOutput() {
                        return void 0 !== this.defines.ENCODE_OUTPUT
                    }
                    set encodeOutput(e) {
                        this.encodeOutput !== e && (e ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = !0)
                    }
                    isOutputEncodingEnabled(e) {
                        return this.encodeOutput
                    }
                    setOutputEncodingEnabled(e) {
                        this.encodeOutput = e
                    }
                    get time() {
                        return this.uniforms.time.value
                    }
                    set time(e) {
                        this.uniforms.time.value = e
                    }
                    setDeltaTime(e) {
                        this.uniforms.time.value += e
                    }
                    adoptCameraSettings(e) {
                        e && (this.uniforms.cameraNear.value = e.near, this.uniforms.cameraFar.value = e.far, e instanceof i.PerspectiveCamera ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0)
                    }
                    setSize(e, t) {
                        const n = this.uniforms;
                        n.resolution.value.set(e, t), n.texelSize.value.set(1 / e, 1 / t), n.aspect.value = e / t
                    }
                    static get Section() {
                        return h
                    }
                },
                g = class extends i.ShaderMaterial {
                    constructor(e = !1, t = null) {
                        super({
                            name: "LuminanceMaterial",
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                threshold: new i.Uniform(0),
                                smoothing: new i.Uniform(1),
                                range: new i.Uniform(null)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <common>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#ifdef RANGE\nuniform vec2 range;\n#elif defined(THRESHOLD)\nuniform float threshold;uniform float smoothing;\n#endif\nvarying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=linearToRelativeLuminance(texel.rgb);\n#ifdef RANGE\nfloat low=step(range.x,l);float high=step(l,range.y);l*=low*high;\n#elif defined(THRESHOLD)\nl=smoothstep(threshold,threshold+smoothing,l);\n#endif\n#ifdef COLOR\ngl_FragColor=vec4(texel.rgb*l,l);\n#else\ngl_FragColor=vec4(l);\n#endif\n}",
                            vertexShader: r
                        }), this.toneMapped = !1, this.colorOutput = e, this.luminanceRange = t
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    get threshold() {
                        return this.uniforms.threshold.value
                    }
                    set threshold(e) {
                        this.smoothing > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.threshold.value = e
                    }
                    getThreshold() {
                        return this.threshold
                    }
                    setThreshold(e) {
                        this.threshold = e
                    }
                    get smoothing() {
                        return this.uniforms.smoothing.value
                    }
                    set smoothing(e) {
                        this.threshold > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.smoothing.value = e
                    }
                    getSmoothingFactor() {
                        return this.smoothing
                    }
                    setSmoothingFactor(e) {
                        this.smoothing = e
                    }
                    get useThreshold() {
                        return this.threshold > 0 || this.smoothing > 0
                    }
                    set useThreshold(e) {}
                    get colorOutput() {
                        return void 0 !== this.defines.COLOR
                    }
                    set colorOutput(e) {
                        e ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = !0
                    }
                    isColorOutputEnabled(e) {
                        return this.colorOutput
                    }
                    setColorOutputEnabled(e) {
                        this.colorOutput = e
                    }
                    get useRange() {
                        return null !== this.luminanceRange
                    }
                    set useRange(e) {
                        this.luminanceRange = null
                    }
                    get luminanceRange() {
                        return this.uniforms.range.value
                    }
                    set luminanceRange(e) {
                        null !== e ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.uniforms.range.value = e, this.needsUpdate = !0
                    }
                    getLuminanceRange() {
                        return this.luminanceRange
                    }
                    setLuminanceRange(e) {
                        this.luminanceRange = e
                    }
                },
                f = class extends i.ShaderMaterial {
                    constructor(e = new i.Vector2, t = new i.Vector2) {
                        super({
                            name: "SMAAWeightsMaterial",
                            defines: {
                                MAX_SEARCH_STEPS_INT: "16",
                                MAX_SEARCH_STEPS_FLOAT: "16.0",
                                MAX_SEARCH_STEPS_DIAG_INT: "8",
                                MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0",
                                CORNER_ROUNDING: "25",
                                CORNER_ROUNDING_NORM: "0.25",
                                AREATEX_MAX_DISTANCE: "16.0",
                                AREATEX_MAX_DISTANCE_DIAG: "20.0",
                                AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))",
                                AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)",
                                SEARCHTEX_SIZE: "vec2(66.0, 33.0)",
                                SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)"
                            },
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                searchTexture: new i.Uniform(null),
                                areaTexture: new i.Uniform(null),
                                resolution: new i.Uniform(t),
                                texelSize: new i.Uniform(e)
                            },
                            blending: i.NoBlending,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)\n#if __VERSION__ < 300\n#define round(v) floor(v + 0.5)\n#endif\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nuniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){\n#if !defined(DISABLE_CORNER_DETECTION)\nvec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);\n#endif\n}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){\n#if !defined(DISABLE_CORNER_DETECTION)\nvec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);\n#endif\n}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){\n#if !defined(DISABLE_DIAG_DETECTION)\nweights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){\n#endif\nvec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);\n#if !defined(DISABLE_DIAG_DETECTION)\n}else{e.r=0.0;}\n#endif\n}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}",
                            vertexShader: "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.toneMapped = !1
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    get searchTexture() {
                        return this.uniforms.searchTexture.value
                    }
                    set searchTexture(e) {
                        this.uniforms.searchTexture.value = e
                    }
                    get areaTexture() {
                        return this.uniforms.areaTexture.value
                    }
                    set areaTexture(e) {
                        this.uniforms.areaTexture.value = e
                    }
                    setLookupTextures(e, t) {
                        this.searchTexture = e, this.areaTexture = t
                    }
                    get orthogonalSearchSteps() {
                        return Number(this.defines.MAX_SEARCH_STEPS_INT)
                    }
                    set orthogonalSearchSteps(e) {
                        const t = Math.min(Math.max(e, 0), 112);
                        this.defines.MAX_SEARCH_STEPS_INT = t.toFixed("0"), this.defines.MAX_SEARCH_STEPS_FLOAT = t.toFixed("1"), this.needsUpdate = !0
                    }
                    setOrthogonalSearchSteps(e) {
                        this.orthogonalSearchSteps = e
                    }
                    get diagonalSearchSteps() {
                        return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)
                    }
                    set diagonalSearchSteps(e) {
                        const t = Math.min(Math.max(e, 0), 20);
                        this.defines.MAX_SEARCH_STEPS_DIAG_INT = t.toFixed("0"), this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT = t.toFixed("1"), this.needsUpdate = !0
                    }
                    setDiagonalSearchSteps(e) {
                        this.diagonalSearchSteps = e
                    }
                    get diagonalDetection() {
                        return void 0 === this.defines.DISABLE_DIAG_DETECTION
                    }
                    set diagonalDetection(e) {
                        e ? delete this.defines.DISABLE_DIAG_DETECTION : this.defines.DISABLE_DIAG_DETECTION = "1", this.needsUpdate = !0
                    }
                    isDiagonalDetectionEnabled() {
                        return this.diagonalDetection
                    }
                    setDiagonalDetectionEnabled(e) {
                        this.diagonalDetection = e
                    }
                    get cornerRounding() {
                        return Number(this.defines.CORNER_ROUNDING)
                    }
                    set cornerRounding(e) {
                        const t = Math.min(Math.max(e, 0), 100);
                        this.defines.CORNER_ROUNDING = t.toFixed("4"), this.defines.CORNER_ROUNDING_NORM = (t / 100).toFixed("4"), this.needsUpdate = !0
                    }
                    setCornerRounding(e) {
                        this.cornerRounding = e
                    }
                    get cornerDetection() {
                        return void 0 === this.defines.DISABLE_CORNER_DETECTION
                    }
                    set cornerDetection(e) {
                        e ? delete this.defines.DISABLE_CORNER_DETECTION : this.defines.DISABLE_CORNER_DETECTION = "1", this.needsUpdate = !0
                    }
                    isCornerRoundingEnabled() {
                        return this.cornerDetection
                    }
                    setCornerRoundingEnabled(e) {
                        this.cornerDetection = e
                    }
                    setSize(e, t) {
                        const n = this.uniforms;
                        n.texelSize.value.set(1 / e, 1 / t), n.resolution.value.set(e, t)
                    }
                },
                v = new i.Camera,
                p = null;
            var m = class {
                    constructor(e = "Pass", t = new i.Scene, n = v) {
                        this.name = e, this.renderer = null, this.scene = t, this.camera = n, this.screen = null, this.rtt = !0, this.needsSwap = !0, this.needsDepthTexture = !1, this.enabled = !0
                    }
                    get renderToScreen() {
                        return !this.rtt
                    }
                    set renderToScreen(e) {
                        if (this.rtt === e) {
                            const t = this.getFullscreenMaterial();
                            null !== t && (t.needsUpdate = !0), this.rtt = !e
                        }
                    }
                    setRenderer(e) {
                        this.renderer = e
                    }
                    isEnabled() {
                        return this.enabled
                    }
                    setEnabled(e) {
                        this.enabled = e
                    }
                    get fullscreenMaterial() {
                        return null !== this.screen ? this.screen.material : null
                    }
                    set fullscreenMaterial(e) {
                        let t = this.screen;
                        null !== t ? t.material = e : (t = new i.Mesh(function() {
                            if (null === p) {
                                const e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                                    t = new Float32Array([0, 0, 2, 0, 0, 2]);
                                void 0 !== (p = new i.BufferGeometry).setAttribute ? (p.setAttribute("position", new i.BufferAttribute(e, 3)), p.setAttribute("uv", new i.BufferAttribute(t, 2))) : (p.addAttribute("position", new i.BufferAttribute(e, 3)), p.addAttribute("uv", new i.BufferAttribute(t, 2)))
                            }
                            return p
                        }(), e), t.frustumCulled = !1, null === this.scene && (this.scene = new i.Scene), this.scene.add(t), this.screen = t)
                    }
                    getFullscreenMaterial() {
                        return this.fullscreenMaterial
                    }
                    setFullscreenMaterial(e) {
                        this.fullscreenMaterial = e
                    }
                    getDepthTexture() {
                        return null
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {}
                    render(e, t, n, i, r) {
                        throw new Error("Render method not implemented!")
                    }
                    setSize(e, t) {}
                    initialize(e, t, n) {}
                    dispose() {
                        for (const e of Object.keys(this)) {
                            const t = this[e];
                            if (null !== t && "function" === typeof t.dispose) {
                                if (t instanceof i.Scene || t === this.renderer) continue;
                                this[e].dispose()
                            }
                        }
                    }
                },
                w = class extends m {
                    constructor(e, t = !0) {
                        super("CopyPass"), this.fullscreenMaterial = new o, this.needsSwap = !1, this.renderTarget = e, void 0 === e && (this.renderTarget = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearFilter,
                            magFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t
                    }
                    get resize() {
                        return this.autoResize
                    }
                    set resize(e) {
                        this.autoResize = e
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    setAutoResizeEnabled(e) {
                        this.autoResize = e
                    }
                    render(e, t, n, i, r) {
                        this.fullscreenMaterial.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        this.autoResize && this.renderTarget.setSize(e, t)
                    }
                    initialize(e, t, n) {
                        void 0 !== n && (this.renderTarget.texture.type = n, n !== i.UnsignedByteType ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e.outputEncoding === i.sRGBEncoding && (this.renderTarget.texture.encoding = i.sRGBEncoding))
                    }
                },
                E = class extends m {
                    constructor(e, {
                        minLuminance: t = .01,
                        adaptationRate: n = 1
                    } = {}) {
                        super("AdaptiveLuminancePass"), this.fullscreenMaterial = new s, this.needsSwap = !1, this.renderTargetPrevious = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.NearestFilter,
                            magFilter: i.NearestFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTargetPrevious.texture.name = "Luminance.Previous";
                        const r = this.fullscreenMaterial;
                        r.luminanceBuffer0 = this.renderTargetPrevious.texture, r.luminanceBuffer1 = e, r.minLuminance = t, r.adaptationRate = n, this.renderTargetAdapted = this.renderTargetPrevious.clone(), this.renderTargetAdapted.texture.name = "Luminance.Adapted", this.copyPass = new w(this.renderTargetPrevious, !1)
                    }
                    get texture() {
                        return this.renderTargetAdapted.texture
                    }
                    getTexture() {
                        return this.renderTargetAdapted.texture
                    }
                    set mipLevel1x1(e) {
                        this.fullscreenMaterial.mipLevel1x1 = e
                    }
                    get adaptationRate() {
                        return this.fullscreenMaterial.adaptationRate
                    }
                    set adaptationRate(e) {
                        this.fullscreenMaterial.adaptationRate = e
                    }
                    render(e, t, n, i, r) {
                        this.fullscreenMaterial.deltaTime = i, e.setRenderTarget(this.renderToScreen ? null : this.renderTargetAdapted), e.render(this.scene, this.camera), this.copyPass.render(e, this.renderTargetAdapted)
                    }
                },
                D = class extends m {
                    constructor() {
                        super("ClearMaskPass", null, null), this.needsSwap = !1
                    }
                    render(e, t, n, i, r) {
                        const s = e.state.buffers.stencil;
                        s.setLocked(!1), s.setTest(!1)
                    }
                },
                B = new i.Color,
                C = class extends m {
                    constructor(e = !0, t = !0, n = !1) {
                        super("ClearPass", null, null), this.needsSwap = !1, this.color = e, this.depth = t, this.stencil = n, this.overrideClearColor = null, this.overrideClearAlpha = -1
                    }
                    setClearFlags(e, t, n) {
                        this.color = e, this.depth = t, this.stencil = n
                    }
                    getOverrideClearColor() {
                        return this.overrideClearColor
                    }
                    setOverrideClearColor(e) {
                        this.overrideClearColor = e
                    }
                    getOverrideClearAlpha() {
                        return this.overrideClearAlpha
                    }
                    setOverrideClearAlpha(e) {
                        this.overrideClearAlpha = e
                    }
                    render(e, t, n, i, r) {
                        const s = this.overrideClearColor,
                            a = this.overrideClearAlpha,
                            o = e.getClearAlpha(),
                            l = null !== s,
                            c = a >= 0;
                        l ? (B.copy(e.getClearColor(B)), e.setClearColor(s, c ? a : o)) : c && e.setClearAlpha(a), e.setRenderTarget(this.renderToScreen ? null : t), e.clear(this.color, this.depth, this.stencil), l ? e.setClearColor(B, o) : c && e.setClearAlpha(o)
                    }
                },
                x = -1,
                T = class extends i.EventDispatcher {
                    constructor(e, t = -1, n = -1, r = 1) {
                        super(), this.resizable = e, this.base = new i.Vector2(1, 1), this.preferred = new i.Vector2(t, n), this.target = this.preferred, this.s = r
                    }
                    get width() {
                        const {
                            base: e,
                            preferred: t,
                            scale: n
                        } = this;
                        let i;
                        return i = t.width !== x ? t.width : t.height !== x ? Math.round(t.height * (e.width / Math.max(e.height, 1))) : Math.round(e.width * n), i
                    }
                    set width(e) {
                        this.preferredWidth = e
                    }
                    get height() {
                        const {
                            base: e,
                            preferred: t,
                            scale: n
                        } = this;
                        let i;
                        return i = t.height !== x ? t.height : t.width !== x ? Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1)) : Math.round(e.height * n), i
                    }
                    set height(e) {
                        this.preferredHeight = e
                    }
                    getWidth() {
                        return this.width
                    }
                    getHeight() {
                        return this.height
                    }
                    get scale() {
                        return this.s
                    }
                    set scale(e) {
                        this.s !== e && (this.s = e, this.preferred.setScalar(x), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    getScale() {
                        return this.scale
                    }
                    setScale(e) {
                        this.scale = e
                    }
                    get baseWidth() {
                        return this.base.width
                    }
                    set baseWidth(e) {
                        this.base.width !== e && (this.base.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    getBaseWidth() {
                        return this.base.width
                    }
                    setBaseWidth(e) {
                        this.base.width !== e && (this.base.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    get baseHeight() {
                        return this.base.height
                    }
                    set baseHeight(e) {
                        this.base.height !== e && (this.base.height = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    getBaseHeight() {
                        return this.baseHeight
                    }
                    setBaseHeight(e) {
                        this.baseHeight = e
                    }
                    setBaseSize(e, t) {
                        this.base.width === e && this.base.height === t || (this.base.set(e, t), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    get preferredWidth() {
                        return this.preferred.width
                    }
                    set preferredWidth(e) {
                        this.preferred.width !== e && (this.preferred.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    getPreferredWidth() {
                        return this.preferredWidth
                    }
                    setPreferredWidth(e) {
                        this.preferredWidth = e
                    }
                    get preferredHeight() {
                        return this.preferred.height
                    }
                    set preferredHeight(e) {
                        this.preferred.height !== e && (this.preferred.height = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    getPreferredHeight() {
                        return this.preferredHeight
                    }
                    setPreferredHeight(e) {
                        this.preferredHeight = e
                    }
                    setPreferredSize(e, t) {
                        this.preferred.width === e && this.preferred.height === t || (this.preferred.set(e, t), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height))
                    }
                    copy(e) {
                        this.base.set(e.getBaseWidth(), e.getBaseHeight()), this.preferred.set(e.getPreferredWidth(), e.getPreferredHeight()), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.base.width, this.base.height)
                    }
                    static get AUTO_SIZE() {
                        return x
                    }
                },
                I = !1,
                y = class {
                    constructor(e = null) {
                        this.originalMaterials = new Map, this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e), this.meshCount = 0, this.replaceMaterial = e => {
                            if (e.isMesh) {
                                let t;
                                if (e.material.flatShading) switch (e.material.side) {
                                    case i.DoubleSide:
                                        t = this.materialsFlatShadedDoubleSide;
                                        break;
                                    case i.BackSide:
                                        t = this.materialsFlatShadedBackSide;
                                        break;
                                    default:
                                        t = this.materialsFlatShaded
                                } else switch (e.material.side) {
                                    case i.DoubleSide:
                                        t = this.materialsDoubleSide;
                                        break;
                                    case i.BackSide:
                                        t = this.materialsBackSide;
                                        break;
                                    default:
                                        t = this.materials
                                }
                                this.originalMaterials.set(e, e.material), e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0], ++this.meshCount
                            }
                        }
                    }
                    setMaterial(e) {
                        if (this.disposeMaterials(), this.material = e, null !== e) {
                            const t = this.materials = [e.clone(), e.clone(), e.clone()];
                            for (const n of t) n.uniforms = Object.assign({}, e.uniforms), n.side = i.FrontSide;
                            t[2].skinning = !0, this.materialsBackSide = t.map((t => {
                                const n = t.clone();
                                return n.uniforms = Object.assign({}, e.uniforms), n.side = i.BackSide, n
                            })), this.materialsDoubleSide = t.map((t => {
                                const n = t.clone();
                                return n.uniforms = Object.assign({}, e.uniforms), n.side = i.DoubleSide, n
                            })), this.materialsFlatShaded = t.map((t => {
                                const n = t.clone();
                                return n.uniforms = Object.assign({}, e.uniforms), n.flatShading = !0, n
                            })), this.materialsFlatShadedBackSide = t.map((t => {
                                const n = t.clone();
                                return n.uniforms = Object.assign({}, e.uniforms), n.flatShading = !0, n.side = i.BackSide, n
                            })), this.materialsFlatShadedDoubleSide = t.map((t => {
                                const n = t.clone();
                                return n.uniforms = Object.assign({}, e.uniforms), n.flatShading = !0, n.side = i.DoubleSide, n
                            }))
                        }
                    }
                    render(e, t, n) {
                        const i = e.shadowMap.enabled;
                        if (e.shadowMap.enabled = !1, I) {
                            const i = this.originalMaterials;
                            this.meshCount = 0, t.traverse(this.replaceMaterial), e.render(t, n);
                            for (const e of i) e[0].material = e[1];
                            this.meshCount !== i.size && i.clear()
                        } else {
                            const i = t.overrideMaterial;
                            t.overrideMaterial = this.material, e.render(t, n), t.overrideMaterial = i
                        }
                        e.shadowMap.enabled = i
                    }
                    disposeMaterials() {
                        if (null !== this.material) {
                            const e = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
                            for (const t of e) t.dispose()
                        }
                    }
                    dispose() {
                        this.originalMaterials.clear(), this.disposeMaterials()
                    }
                    static get workaroundEnabled() {
                        return I
                    }
                    static set workaroundEnabled(e) {
                        I = e
                    }
                },
                M = class extends m {
                    constructor(e, t, n = null) {
                        super("RenderPass", e, t), this.needsSwap = !1, this.clearPass = new C, this.overrideMaterialManager = null === n ? null : new y(n), this.ignoreBackground = !1, this.skipShadowMapUpdate = !1, this.selection = null
                    }
                    get renderToScreen() {
                        return super.renderToScreen
                    }
                    set renderToScreen(e) {
                        super.renderToScreen = e, this.clearPass.renderToScreen = e
                    }
                    get overrideMaterial() {
                        const e = this.overrideMaterialManager;
                        return null !== e ? e.material : null
                    }
                    set overrideMaterial(e) {
                        const t = this.overrideMaterialManager;
                        null !== e ? null !== t ? t.setMaterial(e) : this.overrideMaterialManager = new y(e) : null !== t && (t.dispose(), this.overrideMaterialManager = null)
                    }
                    getOverrideMaterial() {
                        return this.overrideMaterial
                    }
                    setOverrideMaterial(e) {
                        this.overrideMaterial = e
                    }
                    get clear() {
                        return this.clearPass.enabled
                    }
                    set clear(e) {
                        this.clearPass.enabled = e
                    }
                    getSelection() {
                        return this.selection
                    }
                    setSelection(e) {
                        this.selection = e
                    }
                    isBackgroundDisabled() {
                        return this.ignoreBackground
                    }
                    setBackgroundDisabled(e) {
                        this.ignoreBackground = e
                    }
                    isShadowMapDisabled() {
                        return this.skipShadowMapUpdate
                    }
                    setShadowMapDisabled(e) {
                        this.skipShadowMapUpdate = e
                    }
                    getClearPass() {
                        return this.clearPass
                    }
                    render(e, t, n, i, r) {
                        const s = this.scene,
                            a = this.camera,
                            o = this.selection,
                            l = a.layers.mask,
                            c = s.background,
                            u = e.shadowMap.autoUpdate,
                            d = this.renderToScreen ? null : t;
                        null !== o && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1), (this.ignoreBackground || null !== this.clearPass.overrideClearColor) && (s.background = null), this.clearPass.enabled && this.clearPass.render(e, t), e.setRenderTarget(d), null !== this.overrideMaterialManager ? this.overrideMaterialManager.render(e, s, a) : e.render(s, a), a.layers.mask = l, s.background = c, e.shadowMap.autoUpdate = u
                    }
                },
                S = class extends m {
                    constructor({
                        normalBuffer: e = null,
                        resolutionScale: t = .5,
                        width: n = T.AUTO_SIZE,
                        height: r = T.AUTO_SIZE
                    } = {}) {
                        super("DepthDownsamplingPass");
                        const s = new l;
                        s.normalBuffer = e, this.fullscreenMaterial = s, this.needsDepthTexture = !0, this.needsSwap = !1, this.renderTarget = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.NearestFilter,
                            magFilter: i.NearestFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1,
                            type: i.FloatType
                        }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = !1;
                        const a = this.resolution = new T(this, n, r, t);
                        a.addEventListener("change", (e => this.setSize(a.baseWidth, a.baseHeight)))
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    getResolution() {
                        return this.resolution
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {
                        this.fullscreenMaterial.depthBuffer = e, this.fullscreenMaterial.depthPacking = t
                    }
                    render(e, t, n, i, r) {
                        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        this.fullscreenMaterial.setSize(e, t);
                        const n = this.resolution;
                        n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height)
                    }
                    initialize(e, t, n) {
                        e.capabilities.isWebGL2 || console.error("The DepthDownsamplingPass requires WebGL 2")
                    }
                };
            new Float32Array([255 / 256 / 256 ** 3, 255 / 256 / 65536, 255 / 256 / 256, 255 / 256]);
            var R = {
                    SKIP: 0,
                    ADD: 1,
                    ALPHA: 2,
                    AVERAGE: 3,
                    COLOR_BURN: 4,
                    COLOR_DODGE: 5,
                    DARKEN: 6,
                    DIFFERENCE: 7,
                    EXCLUSION: 8,
                    LIGHTEN: 9,
                    MULTIPLY: 10,
                    DIVIDE: 11,
                    NEGATION: 12,
                    NORMAL: 13,
                    OVERLAY: 14,
                    REFLECT: 15,
                    SCREEN: 16,
                    SOFT_LIGHT: 17,
                    SUBTRACT: 18
                },
                F = new Map([
                    [R.SKIP, null],
                    [R.ADD, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}"],
                    [R.ALPHA, "vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}"],
                    [R.AVERAGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}"],
                    [R.COLOR_BURN, "float blend(const in float x,const in float y){return(y==0.0)?y:max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],
                    [R.COLOR_DODGE, "float blend(const in float x,const in float y){return(y==1.0)?y:min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],
                    [R.DARKEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}"],
                    [R.DIFFERENCE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}"],
                    [R.EXCLUSION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}"],
                    [R.LIGHTEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}"],
                    [R.MULTIPLY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}"],
                    [R.DIVIDE, "float blend(const in float x,const in float y){return(y>0.0)?min(x/y,1.0):1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],
                    [R.NEGATION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}"],
                    [R.NORMAL, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}"],
                    [R.OVERLAY, "float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],
                    [R.REFLECT, "float blend(const in float x,const in float y){return(y==1.0)?y:min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],
                    [R.SCREEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}"],
                    [R.SOFT_LIGHT, "float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],
                    [R.SUBTRACT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}"]
                ]),
                L = class extends i.EventDispatcher {
                    constructor(e, t = 1) {
                        super(), this.f = e, this.opacity = new i.Uniform(t)
                    }
                    getOpacity() {
                        return this.opacity.value
                    }
                    setOpacity(e) {
                        this.opacity.value = e
                    }
                    get blendFunction() {
                        return this.f
                    }
                    set blendFunction(e) {
                        this.f = e, this.dispatchEvent({
                            type: "change"
                        })
                    }
                    getBlendFunction() {
                        return this.blendFunction
                    }
                    setBlendFunction(e) {
                        this.blendFunction = e
                    }
                    getShaderCode() {
                        return F.get(this.blendFunction)
                    }
                },
                P = 0,
                b = 1,
                O = 2,
                U = class extends i.EventDispatcher {
                    constructor(e, t, {
                        attributes: n = P,
                        blendFunction: i = R.SCREEN,
                        defines: r = new Map,
                        uniforms: s = new Map,
                        extensions: a = null,
                        vertexShader: o = null
                    } = {}) {
                        super(), this.name = e, this.renderer = null, this.attributes = n, this.fragmentShader = t, this.vertexShader = o, this.defines = r, this.uniforms = s, this.extensions = a, this.blendMode = new L(i), this.blendMode.addEventListener("change", (e => this.setChanged()))
                    }
                    getName() {
                        return this.name
                    }
                    setRenderer(e) {
                        this.renderer = e
                    }
                    getDefines() {
                        return this.defines
                    }
                    getUniforms() {
                        return this.uniforms
                    }
                    getExtensions() {
                        return this.extensions
                    }
                    getBlendMode() {
                        return this.blendMode
                    }
                    getAttributes() {
                        return this.attributes
                    }
                    setAttributes(e) {
                        this.attributes = e, this.setChanged()
                    }
                    getFragmentShader() {
                        return this.fragmentShader
                    }
                    setFragmentShader(e) {
                        this.fragmentShader = e, this.setChanged()
                    }
                    getVertexShader() {
                        return this.vertexShader
                    }
                    setVertexShader(e) {
                        this.vertexShader = e, this.setChanged()
                    }
                    setChanged() {
                        this.dispatchEvent({
                            type: "change"
                        })
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {}
                    update(e, t, n) {}
                    setSize(e, t) {}
                    initialize(e, t, n) {}
                    dispose() {
                        for (const e of Object.keys(this)) {
                            const t = this[e];
                            if (null !== t && "function" === typeof t.dispose) {
                                if (t instanceof i.Scene || t === this.renderer) continue;
                                this[e].dispose()
                            }
                        }
                    }
                };

            function G(e, t, n) {
                for (const i of t) {
                    const t = "$1" + e + i.charAt(0).toUpperCase() + i.slice(1),
                        r = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
                    for (const e of n.entries()) null !== e[1] && n.set(e[0], e[1].replace(r, t))
                }
            }

            function H(e, t, n, i, r, s, a) {
                const o = new Map([
                        ["fragment", t.getFragmentShader()],
                        ["vertex", t.getVertexShader()]
                    ]),
                    l = void 0 !== o.get("fragment") && /mainImage/.test(o.get("fragment")),
                    c = void 0 !== o.get("fragment") && /mainUv/.test(o.get("fragment"));
                let u = [],
                    d = [],
                    h = !1,
                    g = !1;
                if (void 0 === o.get("fragment")) console.error("Missing fragment shader", t);
                else if (c && 0 !== (a & O)) console.error("Effects that transform UV coordinates are incompatible with convolution effects", t);
                else if (l || c) {
                    const f = /(?:\w+\s+(\w+)\([\w\s,]*\)\s*{[^}]+})/g,
                        v = A.Section;
                    if (c) {
                        const t = `\t${e}MainUv(UV);\n`;
                        n.set(v.FRAGMENT_MAIN_UV, n.get(v.FRAGMENT_MAIN_UV) + t), h = !0
                    }
                    if (null !== o.get("vertex") && /mainSupport/.test(o.get("vertex"))) {
                        let t = `\t${e}MainSupport(`;
                        t += /mainSupport *\([\w\s]*?uv\s*?\)/.test(o.get("vertex")) ? "vUv);\n" : ");\n", n.set(v.VERTEX_MAIN_SUPPORT, n.get(v.VERTEX_MAIN_SUPPORT) + t), u = u.concat([...o.get("vertex").matchAll(/(?:varying\s+\w+\s+(\w*))/g)].map((e => e[1]))), d = d.concat(u).concat([...o.get("vertex").matchAll(f)].map((e => e[1])))
                    }
                    d = d.concat([...o.get("fragment").matchAll(f)].map((e => e[1]))), d = d.concat([...t.defines.keys()].map((e => e.replace(/\([\w\s,]*\)/g, "")))), d = d.concat([...t.uniforms.keys()]), t.uniforms.forEach(((t, n) => s.set(e + n.charAt(0).toUpperCase() + n.slice(1), t))), t.defines.forEach(((t, n) => r.set(e + n.charAt(0).toUpperCase() + n.slice(1), t))), G(e, d, r), G(e, d, o);
                    const p = t.blendMode;
                    if (i.set(p.blendFunction, p), l) {
                        const t = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
                        let i = `${e}MainImage(color0, UV, `;
                        0 !== (a & b) && t.test(o.get("fragment")) && (i += "depth, ", g = !0), i += "color1);\n\t";
                        const r = e + "BlendOpacity";
                        s.set(r, p.opacity), i += `color0 = blend${p.blendFunction}(color0, color1, ${r});\n\n\t`, n.set(v.FRAGMENT_MAIN_IMAGE, n.get(v.FRAGMENT_MAIN_IMAGE) + i), i = `uniform float ${r};\n\n`, n.set(v.FRAGMENT_HEAD, n.get(v.FRAGMENT_HEAD) + i)
                    }
                    n.set(v.FRAGMENT_HEAD, n.get(v.FRAGMENT_HEAD) + o.get("fragment") + "\n"), null !== o.get("vertex") && n.set(v.VERTEX_HEAD, n.get(v.VERTEX_HEAD) + o.get("vertex") + "\n")
                } else console.error("The fragment shader contains neither a mainImage nor a mainUv function", t);
                return {
                    varyings: u,
                    transformedUv: h,
                    readDepth: g
                }
            }
            var N = class extends m {
                    constructor(e, ...t) {
                        super("EffectPass"), this.fullscreenMaterial = new A(null, null, null, e), this.effects = t.sort(((e, t) => t.attributes - e.attributes)), this.skipRendering = !1, this.uniformCount = 0, this.varyingCount = 0, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY
                    }
                    get encodeOutput() {
                        return this.fullscreenMaterial.encodeOutput
                    }
                    set encodeOutput(e) {
                        this.fullscreenMaterial.encodeOutput = e
                    }
                    get dithering() {
                        return this.fullscreenMaterial.dithering
                    }
                    set dithering(e) {
                        const t = this.fullscreenMaterial;
                        t.dithering = e, t.needsUpdate = !0
                    }
                    verifyResources() {
                        const e = this.renderer.capabilities;
                        let t = Math.min(e.maxFragmentUniforms, e.maxVertexUniforms);
                        this.uniformCount > t && console.warn("The current rendering context doesn't support more than " + t + " uniforms, but " + this.uniformCount + " were defined"), t = e.maxVaryings, this.varyingCount > t && console.warn("The current rendering context doesn't support more than " + t + " varyings, but " + this.varyingCount + " were defined")
                    }
                    updateMaterial() {
                        const e = A.Section,
                            t = new Map([
                                [e.FRAGMENT_HEAD, ""],
                                [e.FRAGMENT_MAIN_UV, ""],
                                [e.FRAGMENT_MAIN_IMAGE, ""],
                                [e.VERTEX_HEAD, ""],
                                [e.VERTEX_MAIN_SUPPORT, ""]
                            ]),
                            n = new Map,
                            i = new Map,
                            r = new Map,
                            s = new Set;
                        let a = 0,
                            o = 0,
                            l = 0,
                            c = !1,
                            u = !1;
                        for (const h of this.effects)
                            if (h.blendMode.blendFunction === R.SKIP) l |= h.getAttributes() & b;
                            else if (0 !== (l & h.getAttributes() & O)) console.error("Convolution effects cannot be merged", h);
                        else {
                            l |= h.getAttributes();
                            const e = H("e" + a++, h, t, n, i, r, l);
                            if (o += e.varyings.length, c = c || e.transformedUv, u = u || e.readDepth, null !== h.extensions)
                                for (const t of h.extensions) s.add(t)
                        }
                        const d = /\bblend\b/g;
                        for (const h of n.values()) {
                            const n = h.getShaderCode().replace(d, `blend${h.blendFunction}`);
                            t.set(e.FRAGMENT_HEAD, t.get(e.FRAGMENT_HEAD) + n + "\n")
                        }
                        if (0 !== (l & b)) {
                            if (u) {
                                const n = "float depth = readDepth(UV);\n\n\t";
                                t.set(e.FRAGMENT_MAIN_IMAGE, n + t.get(e.FRAGMENT_MAIN_IMAGE))
                            }
                            this.needsDepthTexture = null === this.getDepthTexture()
                        } else this.needsDepthTexture = !1;
                        if (c) {
                            const n = "vec2 transformedUv = vUv;\n";
                            t.set(e.FRAGMENT_MAIN_UV, n + t.get(e.FRAGMENT_MAIN_UV)), i.set("UV", "transformedUv")
                        } else i.set("UV", "vUv");
                        t.forEach(((e, t, n) => n.set(t, e.trim().replace(/^#/, "\n#")))), this.uniformCount = r.size, this.varyingCount = o, this.skipRendering = 0 === a, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderParts(t).setExtensions(s).setUniforms(r).setDefines(i)
                    }
                    recompile() {
                        this.updateMaterial(), this.verifyResources()
                    }
                    getDepthTexture() {
                        return this.fullscreenMaterial.depthBuffer
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {
                        this.fullscreenMaterial.depthBuffer = e, this.fullscreenMaterial.depthPacking = t;
                        for (const n of this.effects) n.setDepthTexture(e, t)
                    }
                    render(e, t, n, i, r) {
                        for (const s of this.effects) s.update(e, t, i);
                        if (!this.skipRendering || this.renderToScreen) {
                            const r = this.fullscreenMaterial;
                            r.inputBuffer = t.texture, r.time += i, e.setRenderTarget(this.renderToScreen ? null : n), e.render(this.scene, this.camera)
                        }
                    }
                    setSize(e, t) {
                        this.fullscreenMaterial.setSize(e, t);
                        for (const n of this.effects) n.setSize(e, t)
                    }
                    initialize(e, t, n) {
                        this.renderer = e;
                        for (const i of this.effects) i.initialize(e, t, n), i.addEventListener("change", (e => this.handleEvent(e)));
                        this.updateMaterial(), this.verifyResources(), void 0 !== n && n !== i.UnsignedByteType && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                    }
                    dispose() {
                        super.dispose();
                        for (const e of this.effects) e.dispose()
                    }
                    handleEvent(e) {
                        if ("change" === e.type) this.recompile()
                    }
                },
                Q = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])],
                z = class extends m {
                    constructor({
                        resolutionScale: e = .5,
                        width: t = T.AUTO_SIZE,
                        height: n = T.AUTO_SIZE,
                        kernelSize: r = J.LARGE
                    } = {}) {
                        super("KawaseBlurPass"), this.renderTargetA = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearFilter,
                            magFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
                        const s = this.resolution = new T(this, t, n, e);
                        s.addEventListener("change", (e => this.setSize(s.baseWidth, s.baseHeight))), this.blurMaterial = new a, this.ditheredBlurMaterial = new a, this.ditheredBlurMaterial.uniforms.scale = this.blurMaterial.uniforms.scale, this.ditheredBlurMaterial.dithering = !0, this.dithering = !1, this.kernelSize = r
                    }
                    getResolution() {
                        return this.resolution
                    }
                    get width() {
                        return this.resolution.width
                    }
                    set width(e) {
                        this.resolution.preferredWidth = e
                    }
                    get height() {
                        return this.resolution.height
                    }
                    set height(e) {
                        this.resolution.preferredHeight = e
                    }
                    get scale() {
                        return this.blurMaterial.scale
                    }
                    set scale(e) {
                        this.blurMaterial.scale = e
                    }
                    getScale() {
                        return this.blurMaterial.scale
                    }
                    setScale(e) {
                        this.blurMaterial.scale = e
                    }
                    getKernelSize() {
                        return this.kernelSize
                    }
                    setKernelSize(e) {
                        this.kernelSize = e
                    }
                    getResolutionScale() {
                        return this.resolution.scale
                    }
                    setResolutionScale(e) {
                        this.resolution.scale = e
                    }
                    render(e, t, n, i, r) {
                        const s = this.scene,
                            a = this.camera,
                            o = this.renderTargetA,
                            l = this.renderTargetB,
                            c = Q[this.kernelSize];
                        let u, d, h = this.blurMaterial,
                            A = t;
                        for (this.fullscreenMaterial = h, u = 0, d = c.length - 1; u < d; ++u) {
                            const t = 0 === (1 & u) ? o : l;
                            h.kernel = c[u], h.inputBuffer = A.texture, e.setRenderTarget(t), e.render(s, a), A = t
                        }
                        this.dithering && (h = this.ditheredBlurMaterial, this.fullscreenMaterial = h), h.kernel = c[u], h.inputBuffer = A.texture, e.setRenderTarget(this.renderToScreen ? null : n), e.render(s, a)
                    }
                    setSize(e, t) {
                        const n = this.resolution;
                        n.setBaseSize(e, t);
                        const i = n.width,
                            r = n.height;
                        this.renderTargetA.setSize(i, r), this.renderTargetB.setSize(i, r), this.blurMaterial.setSize(i, r), this.ditheredBlurMaterial.setSize(i, r)
                    }
                    initialize(e, t, n) {
                        void 0 !== n && (this.renderTargetA.texture.type = n, this.renderTargetB.texture.type = n, n !== i.UnsignedByteType ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.ditheredBlurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e.outputEncoding === i.sRGBEncoding && (this.renderTargetA.texture.encoding = i.sRGBEncoding, this.renderTargetB.texture.encoding = i.sRGBEncoding))
                    }
                    static get AUTO_SIZE() {
                        return T.AUTO_SIZE
                    }
                },
                k = class extends m {
                    constructor({
                        width: e = T.AUTO_SIZE,
                        height: t = T.AUTO_SIZE,
                        renderTarget: n,
                        luminanceRange: r,
                        colorOutput: s
                    } = {}) {
                        super("LuminancePass"), this.fullscreenMaterial = new g(s, r), this.needsSwap = !1, this.renderTarget = n, void 0 === this.renderTarget && (this.renderTarget = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearFilter,
                            magFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "LuminancePass.Target", this.renderTarget.texture.generateMipmaps = !1);
                        const a = this.resolution = new T(this, e, t);
                        a.addEventListener("change", (e => this.setSize(a.baseWidth, a.baseHeight)))
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    getResolution() {
                        return this.resolution
                    }
                    render(e, t, n, i, r) {
                        this.fullscreenMaterial.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        const n = this.resolution;
                        n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height)
                    }
                    initialize(e, t, n) {
                        void 0 !== n && n !== i.UnsignedByteType && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                    }
                },
                Y = class extends m {
                    constructor(e, t) {
                        super("MaskPass", e, t), this.needsSwap = !1, this.clearPass = new C(!1, !1, !0), this.inverse = !1
                    }
                    get inverted() {
                        return this.inverse
                    }
                    set inverted(e) {
                        this.inverse = e
                    }
                    get clear() {
                        return this.clearPass.enabled
                    }
                    set clear(e) {
                        this.clearPass.enabled = e
                    }
                    getClearPass() {
                        return this.clearPass
                    }
                    isInverted() {
                        return this.inverted
                    }
                    setInverted(e) {
                        this.inverted = e
                    }
                    render(e, t, n, i, r) {
                        const s = e.getContext(),
                            a = e.state.buffers,
                            o = this.scene,
                            l = this.camera,
                            c = this.clearPass,
                            u = this.inverted ? 0 : 1,
                            d = 1 - u;
                        a.color.setMask(!1), a.depth.setMask(!1), a.color.setLocked(!0), a.depth.setLocked(!0), a.stencil.setTest(!0), a.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), a.stencil.setFunc(s.ALWAYS, u, 4294967295), a.stencil.setClear(d), a.stencil.setLocked(!0), this.clearPass.enabled && (this.renderToScreen ? c.render(e, null) : (c.render(e, t), c.render(e, n))), this.renderToScreen ? (e.setRenderTarget(null), e.render(o, l)) : (e.setRenderTarget(t), e.render(o, l), e.setRenderTarget(n), e.render(o, l)), a.color.setLocked(!1), a.depth.setLocked(!1), a.stencil.setLocked(!1), a.stencil.setFunc(s.EQUAL, 1, 4294967295), a.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), a.stencil.setLocked(!0)
                    }
                },
                V = class extends m {
                    constructor(e, t, {
                        resolutionScale: n = 1,
                        width: r = T.AUTO_SIZE,
                        height: s = T.AUTO_SIZE,
                        renderTarget: a
                    } = {}) {
                        super("NormalPass"), this.needsSwap = !1, this.renderPass = new M(e, t, new i.MeshNormalMaterial);
                        const o = this.renderPass;
                        o.setBackgroundDisabled(!0), o.setShadowMapDisabled(!0);
                        const l = o.getClearPass();
                        l.setOverrideClearColor(new i.Color(7829503)), l.setOverrideClearAlpha(1), this.renderTarget = a, void 0 === this.renderTarget && (this.renderTarget = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.NearestFilter,
                            magFilter: i.NearestFilter,
                            stencilBuffer: !1
                        }), this.renderTarget.texture.name = "NormalPass.Target");
                        const c = this.resolution = new T(this, r, s, n);
                        c.addEventListener("change", (e => this.setSize(c.baseWidth, c.baseHeight)))
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    getResolution() {
                        return this.resolution
                    }
                    getResolutionScale() {
                        return this.resolution.scale
                    }
                    setResolutionScale(e) {
                        this.resolution.scale = e
                    }
                    render(e, t, n, i, r) {
                        const s = this.renderToScreen ? null : this.renderTarget;
                        this.renderPass.render(e, s, s)
                    }
                    setSize(e, t) {
                        const n = this.resolution;
                        n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height)
                    }
                },
                X = class extends m {
                    constructor(e, t = "inputBuffer") {
                        super("ShaderPass"), this.fullscreenMaterial = e, this.inputBufferUniform = null, this.setInput(t)
                    }
                    setInput(e) {
                        if (this.inputBufferUniform = null, null !== this.fullscreenMaterial) {
                            const t = this.fullscreenMaterial.uniforms;
                            void 0 !== t && void 0 !== t[e] && (this.inputBufferUniform = t[e])
                        }
                    }
                    render(e, t, n, i, r) {
                        null !== this.inputBufferUniform && null !== t && (this.inputBufferUniform.value = t.texture), e.setRenderTarget(this.renderToScreen ? null : n), e.render(this.scene, this.camera)
                    }
                    initialize(e, t, n) {
                        void 0 !== n && n !== i.UnsignedByteType && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                    }
                },
                W = .001,
                K = class {
                    constructor(e = null, {
                        depthBuffer: t = !0,
                        stencilBuffer: n = !1,
                        multisampling: i = 0,
                        frameBufferType: r
                    } = {}) {
                        this.renderer = null, this.inputBuffer = this.createBuffer(t, n, r, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new w, this.depthTexture = null, this.passes = [], this.timer = new class {
                            constructor() {
                                this.previousTime = 0, this.currentTime = 0, this.delta = 0, this.fixedDelta = 1e3 / 60, this.elapsed = 0, this.timescale = 1, this.fixedDeltaEnabled = !1, this.autoReset = !1
                            }
                            setFixedDeltaEnabled(e) {
                                return this.fixedDeltaEnabled = e, this
                            }
                            isAutoResetEnabled(e) {
                                return this.autoReset
                            }
                            setAutoResetEnabled(e) {
                                return "undefined" !== typeof document && void 0 !== document.hidden && (e ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this.autoReset = e), this
                            }
                            getDelta() {
                                return this.delta * W
                            }
                            getFixedDelta() {
                                return this.fixedDelta * W
                            }
                            setFixedDelta(e) {
                                return this.fixedDelta = 1e3 * e, this
                            }
                            getElapsed() {
                                return this.elapsed * W
                            }
                            getTimescale() {
                                return this.timescale
                            }
                            setTimescale(e) {
                                return this.timescale = e, this
                            }
                            update(e) {
                                return this.fixedDeltaEnabled ? this.delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = void 0 !== e ? e : performance.now(), this.delta = this.currentTime - this.previousTime), this.delta *= this.timescale, this.elapsed += this.delta, this
                            }
                            reset() {
                                return this.delta = 0, this.elapsed = 0, this.currentTime = performance.now(), this
                            }
                            handleEvent(e) {
                                document.hidden || (this.currentTime = performance.now())
                            }
                            dispose() {
                                this.setAutoResetEnabled(!1)
                            }
                        }, this.autoRenderToScreen = !0, this.setRenderer(e)
                    }
                    get multisampling() {
                        return this.inputBuffer.samples || 0
                    }
                    set multisampling(e) {
                        const t = this.inputBuffer,
                            n = this.multisampling;
                        n > 0 && e > 0 ? (this.inputBuffer.samples = e, this.outputBuffer.samples = e, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : n !== e && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone())
                    }
                    getTimer() {
                        return this.timer
                    }
                    getRenderer() {
                        return this.renderer
                    }
                    setRenderer(e) {
                        if (this.renderer = e, null !== e) {
                            const t = e.getSize(new i.Vector2),
                                n = e.getContext().getContextAttributes().alpha,
                                r = this.inputBuffer.texture.type;
                            r === i.UnsignedByteType && e.outputEncoding === i.sRGBEncoding && (this.inputBuffer.texture.encoding = i.sRGBEncoding, this.outputBuffer.texture.encoding = i.sRGBEncoding, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e.autoClear = !1, this.setSize(t.width, t.height);
                            for (const i of this.passes) i.initialize(e, n, r)
                        }
                    }
                    replaceRenderer(e, t = !0) {
                        const n = this.renderer,
                            i = n.domElement.parentNode;
                        return this.setRenderer(e), t && null !== i && (i.removeChild(n.domElement), i.appendChild(e.domElement)), n
                    }
                    createDepthTexture() {
                        const e = this.depthTexture = new i.DepthTexture;
                        return this.inputBuffer.depthTexture = e, this.inputBuffer.dispose(), this.inputBuffer.stencilBuffer ? (e.format = i.DepthStencilFormat, e.type = i.UnsignedInt248Type) : e.type = i.UnsignedIntType, e
                    }
                    deleteDepthTexture() {
                        if (null !== this.depthTexture) {
                            this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose();
                            for (const e of this.passes) e.setDepthTexture(null)
                        }
                    }
                    createBuffer(e, t, n, r) {
                        const s = this.renderer,
                            a = null === s ? new i.Vector2 : s.getDrawingBufferSize(new i.Vector2),
                            o = {
                                minFilter: i.LinearFilter,
                                magFilter: i.LinearFilter,
                                stencilBuffer: t,
                                depthBuffer: e,
                                type: n
                            };
                        let l;
                        return r > 0 ? (l = Number(i.REVISION.replace(/\D+/g, "")) < 138 ? new i.WebGLMultisampleRenderTarget(a.width, a.height, o) : new i.WebGLRenderTarget(a.width, a.height, o), l.ignoreDepthForMultisampleCopy = !1, l.samples = r) : l = new i.WebGLRenderTarget(a.width, a.height, o), n === i.UnsignedByteType && null !== s && s.outputEncoding === i.sRGBEncoding && (l.texture.encoding = i.sRGBEncoding), l.texture.name = "EffectComposer.Buffer", l.texture.generateMipmaps = !1, l
                    }
                    addPass(e, t) {
                        const n = this.passes,
                            r = this.renderer,
                            s = r.getDrawingBufferSize(new i.Vector2),
                            a = r.getContext().getContextAttributes().alpha,
                            o = this.inputBuffer.texture.type;
                        if (e.setRenderer(r), e.setSize(s.width, s.height), e.initialize(r, a, o), this.autoRenderToScreen && (n.length > 0 && (n[n.length - 1].renderToScreen = !1), e.renderToScreen && (this.autoRenderToScreen = !1)), void 0 !== t ? n.splice(t, 0, e) : n.push(e), this.autoRenderToScreen && (n[n.length - 1].renderToScreen = !0), e.needsDepthTexture || null !== this.depthTexture)
                            if (null === this.depthTexture) {
                                const t = this.createDepthTexture();
                                for (e of n) e.setDepthTexture(t)
                            } else e.setDepthTexture(this.depthTexture)
                    }
                    removePass(e) {
                        const t = this.passes,
                            n = t.indexOf(e);
                        if (-1 !== n && t.splice(n, 1).length > 0) {
                            if (null !== this.depthTexture) {
                                const n = (e, t) => e || t.needsDepthTexture;
                                t.reduce(n, !1) || (e.getDepthTexture() === this.depthTexture && e.setDepthTexture(null), this.deleteDepthTexture())
                            }
                            this.autoRenderToScreen && n === t.length && (e.renderToScreen = !1, t.length > 0 && (t[t.length - 1].renderToScreen = !0))
                        }
                    }
                    removeAllPasses() {
                        const e = this.passes;
                        this.deleteDepthTexture(), e.length > 0 && (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1), this.passes = [])
                    }
                    render(e) {
                        const t = this.renderer,
                            n = this.copyPass;
                        let i, r, s, a = this.inputBuffer,
                            o = this.outputBuffer,
                            l = !1;
                        void 0 === e && (e = this.timer.update().getDelta());
                        for (const c of this.passes) c.enabled && (c.render(t, a, o, e, l), c.needsSwap && (l && (n.renderToScreen = c.renderToScreen, i = t.getContext(), r = t.state.buffers.stencil, r.setFunc(i.NOTEQUAL, 1, 4294967295), n.render(t, a, o, e, l), r.setFunc(i.EQUAL, 1, 4294967295)), s = a, a = o, o = s), c instanceof Y ? l = !0 : c instanceof D && (l = !1))
                    }
                    setSize(e, t, n) {
                        const r = this.renderer;
                        if (void 0 === e || void 0 === t) {
                            const n = r.getSize(new i.Vector2);
                            e = n.width, t = n.height
                        }
                        r.setSize(e, t, n);
                        const s = r.getDrawingBufferSize(new i.Vector2);
                        this.inputBuffer.setSize(s.width, s.height), this.outputBuffer.setSize(s.width, s.height);
                        for (const i of this.passes) i.setSize(s.width, s.height)
                    }
                    reset() {
                        const e = this.timer.isAutoResetEnabled();
                        this.dispose(), this.autoRenderToScreen = !0, this.timer.setAutoResetEnabled(e)
                    }
                    dispose() {
                        for (const e of this.passes) e.dispose();
                        this.passes = [], null !== this.inputBuffer && this.inputBuffer.dispose(), null !== this.outputBuffer && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose()
                    }
                },
                J = {
                    VERY_SMALL: 0,
                    SMALL: 1,
                    MEDIUM: 2,
                    LARGE: 3,
                    VERY_LARGE: 4,
                    HUGE: 5
                },
                j = (Set, class extends U {
                    constructor({
                        blendFunction: e = R.SCREEN,
                        luminanceThreshold: t = .9,
                        luminanceSmoothing: n = .025,
                        resolutionScale: r = .5,
                        intensity: s = 1,
                        width: a = T.AUTO_SIZE,
                        height: o = T.AUTO_SIZE,
                        kernelSize: l = J.LARGE
                    } = {}) {
                        super("BloomEffect", "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D map;\n#else\nuniform lowp sampler2D map;\n#endif\nuniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=clamp(texture2D(map,uv)*intensity,0.0,1.0);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["map", new i.Uniform(null)],
                                ["intensity", new i.Uniform(s)]
                            ])
                        }), this.renderTarget = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearFilter,
                            magFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "Bloom.Target", this.renderTarget.texture.generateMipmaps = !1, this.uniforms.get("map").value = this.renderTarget.texture, this.luminancePass = new k({
                            renderTarget: this.renderTarget,
                            colorOutput: !0
                        }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothingFactor = n, this.blurPass = new z({
                            resolutionScale: r,
                            width: a,
                            height: o,
                            kernelSize: l
                        });
                        const c = this.blurPass.getResolution();
                        c.addEventListener("change", (e => this.setSize(c.baseWidth, c.baseHeight)))
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    get resolution() {
                        return this.blurPass.resolution
                    }
                    getResolution() {
                        return this.blurPass.resolution
                    }
                    getBlurPass() {
                        return this.blurPass
                    }
                    getLuminancePass() {
                        return this.luminancePass
                    }
                    get luminanceMaterial() {
                        return this.luminancePass.fullscreenMaterial
                    }
                    getLuminanceMaterial() {
                        return this.luminancePass.fullscreenMaterial
                    }
                    get width() {
                        return this.resolution.width
                    }
                    set width(e) {
                        this.resolution.preferredWidth = e
                    }
                    get height() {
                        return this.resolution.height
                    }
                    set height(e) {
                        this.resolution.preferredHeight = e
                    }
                    get dithering() {
                        return this.blurPass.dithering
                    }
                    set dithering(e) {
                        this.blurPass.dithering = e
                    }
                    get kernelSize() {
                        return this.blurPass.kernelSize
                    }
                    set kernelSize(e) {
                        this.blurPass.kernelSize = e
                    }
                    get distinction() {
                        return console.warn(this.name, "distinction was removed"), 1
                    }
                    set distinction(e) {
                        console.warn(this.name, "distinction was removed")
                    }
                    get intensity() {
                        return this.uniforms.get("intensity").value
                    }
                    set intensity(e) {
                        this.uniforms.get("intensity").value = e
                    }
                    getIntensity() {
                        return this.intensity
                    }
                    setIntensity(e) {
                        this.intensity = e
                    }
                    getResolutionScale() {
                        return this.resolution.scale
                    }
                    setResolutionScale(e) {
                        this.resolution.scale = e
                    }
                    update(e, t, n) {
                        const i = this.renderTarget;
                        this.luminancePass.enabled ? (this.luminancePass.render(e, t, i), this.blurPass.render(e, i, i)) : this.blurPass.render(e, t, i)
                    }
                    setSize(e, t) {
                        const n = this.resolution;
                        n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height), this.luminancePass.resolution.copy(n)
                    }
                    initialize(e, t, n) {
                        this.blurPass.initialize(e, t, n), void 0 !== n && (this.renderTarget.texture.type = n, e.outputEncoding === i.sRGBEncoding && (this.renderTarget.texture.encoding = i.sRGBEncoding))
                    }
                }),
                Z = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        brightness: t = 0,
                        contrast: n = 0
                    } = {}) {
                        super("BrightnessContrastEffect", "uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(min(color+vec3(0.5),1.0),inputColor.a);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["brightness", new i.Uniform(t)],
                                ["contrast", new i.Uniform(n)]
                            ])
                        })
                    }
                    get brightness() {
                        return this.uniforms.get("brightness").value
                    }
                    set brightness(e) {
                        this.uniforms.get("brightness").value = e
                    }
                    getBrightness(e) {
                        return this.brightness
                    }
                    setBrightness(e) {
                        this.brightness = e
                    }
                    get contrast() {
                        return this.uniforms.get("contrast").value
                    }
                    set contrast(e) {
                        this.uniforms.get("contrast").value = e
                    }
                    getContrast(e) {
                        return this.contrast
                    }
                    setContrast(e) {
                        this.contrast = e
                    }
                },
                q = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        bits: t = 16
                    } = {}) {
                        super("ColorDepthEffect", "uniform float factor;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(floor(inputColor.rgb*factor+0.5)/factor,inputColor.a);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["factor", new i.Uniform(1)]
                            ])
                        }), this.bits = 0, this.bitDepth = t
                    }
                    get bitDepth() {
                        return this.bits
                    }
                    set bitDepth(e) {
                        this.bits = e, this.uniforms.get("factor").value = Math.pow(2, e / 3)
                    }
                    getBitDepth() {
                        return this.bitDepth
                    }
                    setBitDepth(e) {
                        this.bitDepth = e
                    }
                },
                _ = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        inverted: t = !1
                    } = {}) {
                        super("DepthEffect", "void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){\n#ifdef INVERTED\nvec3 color=vec3(1.0-depth);\n#else\nvec3 color=vec3(depth);\n#endif\noutputColor=vec4(color,inputColor.a);}", {
                            blendFunction: e,
                            attributes: b
                        }), this.inverted = t
                    }
                    get inverted() {
                        return this.defines.has("INVERTED")
                    }
                    set inverted(e) {
                        this.inverted !== e && (e ? this.defines.set("INVERTED", "1") : this.defines.delete("INVERTED"), this.setChanged())
                    }
                    isInverted() {
                        return this.inverted
                    }
                    setInverted(e) {
                        this.inverted = e
                    }
                },
                $ = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        angle: t = .5 * Math.PI,
                        scale: n = 1
                    } = {}) {
                        super("DotScreenEffect", "uniform vec2 angle;uniform float scale;float pattern(const in vec2 uv){vec2 point=scale*vec2(dot(angle.yx,vec2(uv.x,-uv.y)),dot(angle,uv));return(sin(point.x)*sin(point.y))*4.0;}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(inputColor.rgb*10.0-5.0+pattern(uv*resolution));outputColor=vec4(color,inputColor.a);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["angle", new i.Uniform(new i.Vector2)],
                                ["scale", new i.Uniform(n)]
                            ])
                        }), this.angle = t
                    }
                    get angle() {
                        return Math.acos(this.uniforms.get("angle").value.y)
                    }
                    set angle(e) {
                        this.uniforms.get("angle").value.set(Math.sin(e), Math.cos(e))
                    }
                    getAngle() {
                        return this.angle
                    }
                    setAngle(e) {
                        this.angle = e
                    }
                    get scale() {
                        return this.uniforms.get("scale").value
                    }
                    set scale(e) {
                        this.uniforms.get("scale").value = e
                    }
                };
            new i.Vector3, new i.Matrix4;
            var ee = class extends U {
                constructor({
                    blendFunction: e = R.NORMAL,
                    hue: t = 0,
                    saturation: n = 0
                } = {}) {
                    super("HueSaturationEffect", "uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}", {
                        blendFunction: e,
                        uniforms: new Map([
                            ["hue", new i.Uniform(new i.Vector3)],
                            ["saturation", new i.Uniform(n)]
                        ])
                    }), this.hue = t
                }
                get saturation() {
                    return this.uniforms.get("saturation").value
                }
                set saturation(e) {
                    this.uniforms.get("saturation").value = e
                }
                getSaturation() {
                    return this.saturation
                }
                setSaturation(e) {
                    this.saturation = e
                }
                get hue() {
                    const e = this.uniforms.get("hue").value;
                    return Math.acos((3 * e.x - 1) / 2)
                }
                set hue(e) {
                    const t = Math.sin(e),
                        n = Math.cos(e);
                    this.uniforms.get("hue").value.set((2 * n + 1) / 3, (-Math.sqrt(3) * t - n + 1) / 3, (Math.sqrt(3) * t - n + 1) / 3)
                }
                getHue() {
                    return this.hue
                }
                setHue(e) {
                    this.hue = e
                }
            };

            function te(e, t, n) {
                const i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (i.width = e, i.height = t, n instanceof Image) r.drawImage(n, 0, 0);
                else {
                    const i = r.createImageData(e, t);
                    i.data.set(n), r.putImageData(i, 0, 0)
                }
                return i
            }
            var ne = class {
                    constructor(e = 0, t = 0, n = null) {
                        this.width = e, this.height = t, this.data = n
                    }
                    toCanvas() {
                        return "undefined" === typeof document ? null : te(this.width, this.height, this.data)
                    }
                    static from(e) {
                        const {
                            width: t,
                            height: n
                        } = e;
                        let i;
                        if (e instanceof Image) {
                            const r = te(t, n, e);
                            if (null !== r) {
                                i = r.getContext("2d").getImageData(0, 0, t, n).data
                            }
                        } else i = e.data;
                        return new ne(t, n, i)
                    }
                },
                ie = "lut.scaleup",
                re = new i.Color,
                se = class extends i.DataTexture3D {
                    constructor(e, t) {
                        super(e, t, t, t), this.type = i.FloatType, this.format = i.RGBAFormat, this.encoding = i.LinearEncoding, this.minFilter = i.LinearFilter, this.magFilter = i.LinearFilter, this.wrapS = i.ClampToEdgeWrapping, this.wrapT = i.ClampToEdgeWrapping, this.wrapR = i.ClampToEdgeWrapping, this.unpackAlignment = 1, this.needsUpdate = !0, this.domainMin = new i.Vector3(0, 0, 0), this.domainMax = new i.Vector3(1, 1, 1)
                    }
                    get isLookupTexture3D() {
                        return !0
                    }
                    scaleUp(e, t = !0) {
                        const n = this.image;
                        let i;
                        return i = e <= n.width ? Promise.reject(new Error("The target size must be greater than the current size")) : new Promise(((i, r) => {
                            const s = URL.createObjectURL(new Blob(['(()=>{var E=Math.pow;var _={SCALE_UP:"lut.scaleup"};var k=[new Float32Array(3),new Float32Array(3)],n=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Z=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];function S(a,t,r,m){let i=r[0]-t[0],e=r[1]-t[1],y=r[2]-t[2],h=a[0]-t[0],A=a[1]-t[1],w=a[2]-t[2],c=e*w-y*A,l=y*h-i*w,x=i*A-e*h,u=Math.sqrt(c*c+l*l+x*x),b=u*.5,s=c/u,F=l/u,f=x/u,p=-(a[0]*s+a[1]*F+a[2]*f),M=m[0]*s+m[1]*F+m[2]*f;return Math.abs(M+p)*b/3}function U(a,t,r,m,i,e){let y=(r+m*t+i*t*t)*4;e[0]=a[y+0],e[1]=a[y+1],e[2]=a[y+2]}function j(a,t,r,m,i,e){let y=r*(t-1),h=m*(t-1),A=i*(t-1),w=Math.floor(y),c=Math.floor(h),l=Math.floor(A),x=Math.ceil(y),u=Math.ceil(h),b=Math.ceil(A),s=y-w,F=h-c,f=A-l;if(w===y&&c===h&&l===A)U(a,t,y,h,A,e);else{let p;s>=F&&F>=f?p=Z[0]:s>=f&&f>=F?p=Z[1]:f>=s&&s>=F?p=Z[2]:F>=s&&s>=f?p=Z[3]:F>=f&&f>=s?p=Z[4]:f>=F&&F>=s&&(p=Z[5]);let[M,g,X,Y]=p,P=k[0];P[0]=s,P[1]=F,P[2]=f;let o=k[1],V=x-w,d=u-c,L=b-l;o[0]=V*M[0]+w,o[1]=d*M[1]+c,o[2]=L*M[2]+l,U(a,t,o[0],o[1],o[2],n[0]),o[0]=V*g[0]+w,o[1]=d*g[1]+c,o[2]=L*g[2]+l,U(a,t,o[0],o[1],o[2],n[1]),o[0]=V*X[0]+w,o[1]=d*X[1]+c,o[2]=L*X[2]+l,U(a,t,o[0],o[1],o[2],n[2]),o[0]=V*Y[0]+w,o[1]=d*Y[1]+c,o[2]=L*Y[2]+l,U(a,t,o[0],o[1],o[2],n[3]);let T=S(g,X,Y,P)*6,v=S(M,X,Y,P)*6,q=S(M,g,Y,P)*6,C=S(M,g,X,P)*6;n[0][0]*=T,n[0][1]*=T,n[0][2]*=T,n[1][0]*=v,n[1][1]*=v,n[1][2]*=v,n[2][0]*=q,n[2][1]*=q,n[2][2]*=q,n[3][0]*=C,n[3][1]*=C,n[3][2]*=C,e[0]=n[0][0]+n[1][0]+n[2][0]+n[3][0],e[1]=n[0][1]+n[1][1]+n[2][1]+n[3][1],e[2]=n[0][2]+n[1][2]+n[2][2]+n[3][2]}}var O=class{static expand(t,r){let m=Math.cbrt(t.length/4),i=new Float32Array(3),e=new t.constructor(E(r,3)*4),y=t instanceof Uint8Array?255:1,h=E(r,2),A=1/(r-1);for(let w=0;w<r;++w)for(let c=0;c<r;++c)for(let l=0;l<r;++l){let x=l*A,u=c*A,b=w*A,s=Math.round(l+c*r+w*h)*4;j(t,m,x,u,b,i),e[s+0]=i[0],e[s+1]=i[1],e[s+2]=i[2],e[s+3]=y}return e}};self.addEventListener("message",a=>{let t=a.data,r=t.data;switch(t.operation){case _.SCALE_UP:r=O.expand(r,t.size);break}postMessage(r,[r.buffer]),close()});})();\n'], {
                                    type: "text/javascript"
                                })),
                                a = new Worker(s);
                            a.addEventListener("error", (e => r(e.error))), a.addEventListener("message", (t => {
                                const n = new se(t.data, e);
                                n.encoding = this.encoding, n.type = this.type, n.name = this.name, URL.revokeObjectURL(s), i(n)
                            }));
                            const o = t ? [n.data.buffer] : [];
                            a.postMessage({
                                operation: ie,
                                data: n.data,
                                size: e
                            }, o)
                        })), i
                    }
                    applyLUT(e) {
                        const t = this.image,
                            n = e.image,
                            r = Math.min(t.width, t.height, t.depth);
                        if (r !== Math.min(n.width, n.height, n.depth)) console.error("Size mismatch");
                        else if (e.type !== i.FloatType || this.type !== i.FloatType) console.error("Both LUTs must be FloatType textures");
                        else if (e.format !== i.RGBAFormat || this.format !== i.RGBAFormat) console.error("Both LUTs must be RGBA textures");
                        else {
                            const e = t.data,
                                i = n.data,
                                s = r,
                                a = s ** 2,
                                o = s - 1;
                            for (let t = 0, n = s ** 3; t < n; ++t) {
                                const n = 4 * t,
                                    r = e[n + 0] * o,
                                    l = e[n + 1] * o,
                                    c = e[n + 2] * o,
                                    u = 4 * Math.round(r + l * s + c * a);
                                e[n + 0] = i[u + 0], e[n + 1] = i[u + 1], e[n + 2] = i[u + 2]
                            }
                            this.needsUpdate = !0
                        }
                        return this
                    }
                    convertToUint8() {
                        if (this.type === i.FloatType) {
                            const e = this.image.data,
                                t = new Uint8Array(e.length);
                            for (let n = 0, i = e.length; n < i; ++n) t[n] = 255 * e[n] + .5;
                            this.image.data = t, this.type = i.UnsignedByteType, this.needsUpdate = !0
                        }
                        return this
                    }
                    convertToFloat() {
                        if (this.type === i.UnsignedByteType) {
                            const e = this.image.data,
                                t = new Float32Array(e.length);
                            for (let n = 0, i = e.length; n < i; ++n) t[n] = e[n] / 255;
                            this.image.data = t, this.type = i.FloatType, this.needsUpdate = !0
                        }
                        return this
                    }
                    convertToRGBA() {
                        return console.warn("LookupTexture", "convertToRGBA() is deprecated, LUTs are now RGBA by default"), this
                    }
                    convertLinearToSRGB() {
                        const e = this.image.data;
                        if (this.type === i.FloatType) {
                            for (let t = 0, n = e.length; t < n; t += 4) re.fromArray(e, t).convertLinearToSRGB().toArray(e, t);
                            this.encoding = i.sRGBEncoding, this.needsUpdate = !0
                        } else console.error("Color space conversion requires FloatType data");
                        return this
                    }
                    convertSRGBToLinear() {
                        const e = this.image.data;
                        if (this.type === i.FloatType) {
                            for (let t = 0, n = e.length; t < n; t += 4) re.fromArray(e, t).convertSRGBToLinear().toArray(e, t);
                            this.encoding = i.LinearEncoding, this.needsUpdate = !0
                        } else console.error("Color space conversion requires FloatType data");
                        return this
                    }
                    toDataTexture() {
                        const e = this.image.width,
                            t = this.image.height * this.image.depth,
                            n = new i.DataTexture(this.image.data, e, t);
                        return n.name = this.name, n.type = this.type, n.format = this.format, n.encoding = this.encoding, n.minFilter = i.LinearFilter, n.magFilter = i.LinearFilter, n.wrapS = this.wrapS, n.wrapT = this.wrapT, n.generateMipmaps = !1, n.needsUpdate = !0, n
                    }
                    static from(e) {
                        const t = e.image,
                            {
                                width: n,
                                height: i
                            } = t,
                            r = Math.min(n, i);
                        let s;
                        if (t instanceof Image) {
                            const e = ne.from(t).data;
                            if (n > i) {
                                s = new Uint8Array(e.length);
                                for (let t = 0; t < r; ++t)
                                    for (let n = 0; n < r; ++n)
                                        for (let i = 0; i < r; ++i) {
                                            const a = 4 * (i + t * r + n * r * r),
                                                o = 4 * (i + n * r + t * r * r);
                                            s[o + 0] = e[a + 0], s[o + 1] = e[a + 1], s[o + 2] = e[a + 2], s[o + 3] = e[a + 3]
                                        }
                            } else s = new Uint8Array(e.buffer)
                        } else s = t.data.slice();
                        const a = new se(s, r);
                        return a.encoding = e.encoding, a.type = e.type, a.name = e.name, a
                    }
                    static createNeutral(e) {
                        const t = new Float32Array(e ** 3 * 4),
                            n = e ** 2,
                            i = 1 / (e - 1);
                        for (let s = 0; s < e; ++s)
                            for (let r = 0; r < e; ++r)
                                for (let a = 0; a < e; ++a) {
                                    const o = 4 * (s + r * e + a * n);
                                    t[o + 0] = s * i, t[o + 1] = r * i, t[o + 2] = a * i, t[o + 3] = 1
                                }
                        const r = new se(t, e);
                        return r.name = "neutral", r
                    }
                },
                ae = class extends U {
                    constructor(e, {
                        blendFunction: t = R.NORMAL,
                        tetrahedralInterpolation: n = !1
                    } = {}) {
                        super("LUTEffect", "uniform vec3 scale;uniform vec3 offset;\n#ifdef CUSTOM_INPUT_DOMAIN\nuniform vec3 domainMin;uniform vec3 domainMax;\n#endif\n#ifdef LUT_3D\n#ifdef LUT_PRECISION_HIGH\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler3D lut;\n#else\nuniform mediump sampler3D lut;\n#endif\n#else\nuniform lowp sampler3D lut;\n#endif\nvec4 applyLUT(const in vec3 rgb){\n#ifdef TETRAHEDRAL_INTERPOLATION\nvec3 p=floor(rgb);vec3 f=rgb-p;vec3 v1=(p+0.5)*LUT_TEXEL_WIDTH;vec3 v4=(p+1.5)*LUT_TEXEL_WIDTH;vec3 v2,v3;vec3 frac;if(f.r>=f.g){if(f.g>f.b){frac=f.rgb;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else if(f.r>=f.b){frac=f.rbg;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v1.y,v4.z);}else{frac=f.brg;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v4.x,v1.y,v4.z);}}else{if(f.b>f.g){frac=f.bgr;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v1.x,v4.y,v4.z);}else if(f.r>=f.b){frac=f.grb;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else{frac=f.gbr;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v1.x,v4.y,v4.z);}}vec4 n1=texture(lut,v1);vec4 n2=texture(lut,v2);vec4 n3=texture(lut,v3);vec4 n4=texture(lut,v4);vec4 weights=vec4(1.0-frac.x,frac.x-frac.y,frac.y-frac.z,frac.z);vec4 result=weights*mat4(vec4(n1.r,n2.r,n3.r,n4.r),vec4(n1.g,n2.g,n3.g,n4.g),vec4(n1.b,n2.b,n3.b,n4.b),vec4(1.0));return vec4(result.rgb,1.0);\n#else\nreturn texture(lut,rgb);\n#endif\n}\n#else\n#ifdef LUT_PRECISION_HIGH\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D lut;\n#else\nuniform mediump sampler2D lut;\n#endif\n#else\nuniform lowp sampler2D lut;\n#endif\nvec4 applyLUT(const in vec3 rgb){float slice=rgb.b*LUT_SIZE;float slice0=floor(slice);float interp=slice-slice0;float centeredInterp=interp-0.5;float slice1=slice0+sign(centeredInterp);\n#ifdef LUT_STRIP_HORIZONTAL\nfloat xOffset=clamp(rgb.r*LUT_TEXEL_HEIGHT,LUT_TEXEL_WIDTH*0.5,LUT_TEXEL_HEIGHT-LUT_TEXEL_WIDTH*0.5);vec2 uv0=vec2(slice0*LUT_TEXEL_HEIGHT+xOffset,rgb.g);vec2 uv1=vec2(slice1*LUT_TEXEL_HEIGHT+xOffset,rgb.g);\n#else\nfloat yOffset=clamp(rgb.g*LUT_TEXEL_WIDTH,LUT_TEXEL_HEIGHT*0.5,LUT_TEXEL_WIDTH-LUT_TEXEL_HEIGHT*0.5);vec2 uv0=vec2(rgb.r,slice0*LUT_TEXEL_WIDTH+yOffset);vec2 uv1=vec2(rgb.r,slice1*LUT_TEXEL_WIDTH+yOffset);\n#endif\nvec4 sample0=texture2D(lut,uv0);vec4 sample1=texture2D(lut,uv1);return mix(sample0,sample1,abs(centeredInterp));}\n#endif\nvoid mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 c=linearToInputTexel(inputColor).rgb;\n#ifdef CUSTOM_INPUT_DOMAIN\nif(c.r>=domainMin.r&&c.g>=domainMin.g&&c.b>=domainMin.b&&c.r<=domainMax.r&&c.g<=domainMax.g&&c.b<=domainMax.b){c=texelToLinear(applyLUT(scale*c+offset)).rgb;}else{c=inputColor.rgb;}\n#else\n#if !defined(LUT_3D) || defined(TETRAHEDRAL_INTERPOLATION)\nc=clamp(c,0.0,1.0);\n#endif\nc=texelToLinear(applyLUT(scale*c+offset)).rgb;\n#endif\noutputColor=vec4(c,inputColor.a);}", {
                            blendFunction: t,
                            uniforms: new Map([
                                ["lut", new i.Uniform(null)],
                                ["scale", new i.Uniform(new i.Vector3)],
                                ["offset", new i.Uniform(new i.Vector3)],
                                ["domainMin", new i.Uniform(null)],
                                ["domainMax", new i.Uniform(null)]
                            ])
                        }), this.tetrahedralInterpolation = n, this.inputEncoding = i.sRGBEncoding, this.lut = e
                    }
                    getOutputEncoding() {
                        return Number(this.defines.get("OUTPUT_ENCODING"))
                    }
                    get inputEncoding() {
                        return Number(this.defines.get("INPUT_ENCODING"))
                    }
                    set inputEncoding(e) {
                        const t = this.lut,
                            n = this.defines;
                        switch (n.set("INPUT_ENCODING", e.toFixed(0)), e) {
                            case i.sRGBEncoding:
                                n.set("linearToInputTexel(texel)", "LinearTosRGB(texel)");
                                break;
                            case i.LinearEncoding:
                                n.set("linearToInputTexel(texel)", "texel");
                                break;
                            default:
                                console.error("Unsupported input encoding:", e)
                        }
                        if (null !== t) {
                            const r = t.encoding === i.LinearEncoding ? e : t.encoding;
                            switch (n.set("OUTPUT_ENCODING", r.toFixed(0)), r) {
                                case i.sRGBEncoding:
                                    n.set("texelToLinear(texel)", "sRGBToLinear(texel)");
                                    break;
                                case i.LinearEncoding:
                                    n.set("texelToLinear(texel)", "texel");
                                    break;
                                default:
                                    console.error("Unsupported output encoding:", r)
                            }
                        }
                        this.setChanged()
                    }
                    getInputEncoding() {
                        return this.inputEncoding
                    }
                    setInputEncoding(e) {
                        this.inputEncoding = e
                    }
                    get lut() {
                        return this.uniforms.get("lut").value
                    }
                    set lut(e) {
                        const t = this.defines,
                            n = this.uniforms;
                        if (this.lut !== e && (n.get("lut").value = e, null !== e)) {
                            const r = e.image,
                                s = this.tetrahedralInterpolation,
                                a = this.inputEncoding;
                            if (t.clear(), t.set("LUT_SIZE", Math.min(r.width, r.height).toFixed(16)), t.set("LUT_TEXEL_WIDTH", (1 / r.width).toFixed(16)), t.set("LUT_TEXEL_HEIGHT", (1 / r.height).toFixed(16)), n.get("domainMin").value = null, n.get("domainMax").value = null, e.type !== i.FloatType && e.type !== i.HalfFloatType || t.set("LUT_PRECISION_HIGH", "1"), r.width > r.height ? t.set("LUT_STRIP_HORIZONTAL", "1") : e instanceof i.DataTexture3D && t.set("LUT_3D", "1"), e instanceof se) {
                                const i = e.domainMin,
                                    r = e.domainMax;
                                0 === i.x && 0 === i.y && 0 === i.z && 1 === r.x && 1 === r.y && 1 === r.z || (t.set("CUSTOM_INPUT_DOMAIN", "1"), n.get("domainMin").value = i.clone(), n.get("domainMax").value = r.clone())
                            }
                            this.tetrahedralInterpolation = s, this.inputEncoding = a
                        }
                    }
                    getLUT() {
                        return this.lut
                    }
                    setLUT(e) {
                        this.lut = e
                    }
                    updateScaleOffset() {
                        const e = this.lut;
                        if (null !== e) {
                            const t = Math.min(e.image.width, e.image.height),
                                n = this.uniforms.get("scale").value,
                                r = this.uniforms.get("offset").value;
                            if (this.tetrahedralInterpolation && e instanceof i.DataTexture3D)
                                if (this.defines.has("CUSTOM_INPUT_DOMAIN")) {
                                    const i = e.domainMax.clone().sub(e.domainMin);
                                    n.setScalar(t - 1).divide(i), r.copy(e.domainMin).negate().multiply(n)
                                } else n.setScalar(t - 1), r.setScalar(0);
                            else if (this.defines.has("CUSTOM_INPUT_DOMAIN")) {
                                const i = e.domainMax.clone().sub(e.domainMin).multiplyScalar(t);
                                n.setScalar(t - 1).divide(i), r.copy(e.domainMin).negate().multiply(n).addScalar(1 / (2 * t))
                            } else n.setScalar((t - 1) / t), r.setScalar(1 / (2 * t))
                        }
                    }
                    configureTetrahedralInterpolation() {
                        const e = this.lut;
                        null !== e && (e.minFilter = i.LinearFilter, e.magFilter = i.LinearFilter, this.tetrahedralInterpolation && (e instanceof i.DataTexture3D ? (e.minFilter = i.NearestFilter, e.magFilter = i.NearestFilter) : console.warn("Tetrahedral interpolation requires a 3D texture")), void 0 === e.source && (e.needsUpdate = !0))
                    }
                    get tetrahedralInterpolation() {
                        return this.defines.has("TETRAHEDRAL_INTERPOLATION")
                    }
                    set tetrahedralInterpolation(e) {
                        e ? this.defines.set("TETRAHEDRAL_INTERPOLATION", "1") : this.defines.delete("TETRAHEDRAL_INTERPOLATION"), this.configureTetrahedralInterpolation(), this.updateScaleOffset(), this.setChanged()
                    }
                    setTetrahedralInterpolationEnabled(e) {
                        this.tetrahedralInterpolation = e
                    }
                },
                oe = class extends U {
                    constructor({
                        blendFunction: e = R.SCREEN,
                        premultiply: t = !1
                    } = {}) {
                        super("NoiseEffect", "void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*time));\n#ifdef PREMULTIPLY\noutputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);\n#else\noutputColor=vec4(noise,inputColor.a);\n#endif\n}", {
                            blendFunction: e
                        }), this.premultiply = t
                    }
                    get premultiply() {
                        return this.defines.has("PREMULTIPLY")
                    }
                    set premultiply(e) {
                        this.premultiply !== e && (e ? this.defines.set("PREMULTIPLY", "1") : this.defines.delete("PREMULTIPLY"), this.setChanged())
                    }
                    isPremultiplied() {
                        return this.premultiply
                    }
                    setPremultiplied(e) {
                        this.premultiply = e
                    }
                },
                le = class extends U {
                    constructor({
                        blendFunction: e = R.OVERLAY,
                        density: t = 1.25,
                        scrollSpeed: n = 0
                    } = {}) {
                        super("ScanlineEffect", "uniform float count;\n#ifdef SCROLL\nuniform float scrollSpeed;\n#endif\nvoid mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float y=uv.y;\n#ifdef SCROLL\ny+=time*scrollSpeed;\n#endif\nvec2 sl=vec2(sin(y*count),cos(y*count));outputColor=vec4(sl.xyx,inputColor.a);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["count", new i.Uniform(0)],
                                ["scrollSpeed", new i.Uniform(0)]
                            ])
                        }), this.resolution = new i.Vector2, this.d = t, this.scrollSpeed = n
                    }
                    get density() {
                        return this.d
                    }
                    set density(e) {
                        this.d = e, this.setSize(this.resolution.width, this.resolution.height)
                    }
                    getDensity() {
                        return this.density
                    }
                    setDensity(e) {
                        this.density = e
                    }
                    get scrollSpeed() {
                        return this.uniforms.get("scrollSpeed").value
                    }
                    set scrollSpeed(e) {
                        this.uniforms.get("scrollSpeed").value = e, 0 === e ? this.defines.delete("SCROLL") && this.setChanged() : this.defines.has("SCROLL") || (this.defines.set("SCROLL", "1"), this.setChanged())
                    }
                    setSize(e, t) {
                        this.resolution.set(e, t), this.uniforms.get("count").value = Math.round(t * this.density)
                    }
                },
                ce = .5 * Math.PI,
                ue = new i.Vector3,
                de = new i.Vector3,
                he = class extends U {
                    constructor(e, t = new i.Vector3, {
                        speed: n = 2,
                        maxRadius: r = 1,
                        waveSize: s = .2,
                        amplitude: a = .05
                    } = {}) {
                        super("ShockWaveEffect", "uniform bool active;uniform vec2 center;uniform float waveSize;uniform float radius;uniform float maxRadius;uniform float amplitude;varying float vSize;void mainUv(inout vec2 uv){if(active){vec2 aspectCorrection=vec2(aspect,1.0);vec2 difference=uv*aspectCorrection-center*aspectCorrection;float distance=sqrt(dot(difference,difference))*vSize;if(distance>radius){if(distance<radius+waveSize){float angle=(distance-radius)*PI2/waveSize;float cosSin=(1.0-cos(angle))*0.5;float extent=maxRadius+waveSize;float decay=max(extent-distance*distance,0.0)/extent;uv-=((cosSin*amplitude*difference)/distance)*decay;}}}}", {
                            vertexShader: "uniform float size;uniform float cameraDistance;varying float vSize;void mainSupport(){vSize=(0.1*cameraDistance)/size;}",
                            uniforms: new Map([
                                ["active", new i.Uniform(!1)],
                                ["center", new i.Uniform(new i.Vector2(.5, .5))],
                                ["cameraDistance", new i.Uniform(1)],
                                ["size", new i.Uniform(1)],
                                ["radius", new i.Uniform(-s)],
                                ["maxRadius", new i.Uniform(r)],
                                ["waveSize", new i.Uniform(s)],
                                ["amplitude", new i.Uniform(a)]
                            ])
                        }), this.position = t, this.speed = n, this.camera = e, this.screenPosition = this.uniforms.get("center").value, this.time = 0, this.active = !1
                    }
                    get amplitude() {
                        return this.uniforms.get("amplitude").value
                    }
                    set amplitude(e) {
                        this.uniforms.get("amplitude").value = e
                    }
                    get waveSize() {
                        return this.uniforms.get("waveSize").value
                    }
                    set waveSize(e) {
                        this.uniforms.get("waveSize").value = e
                    }
                    get maxRadius() {
                        return this.uniforms.get("maxRadius").value
                    }
                    set maxRadius(e) {
                        this.uniforms.get("maxRadius").value = e
                    }
                    get epicenter() {
                        return this.position
                    }
                    set epicenter(e) {
                        this.position = e
                    }
                    getPosition() {
                        return this.position
                    }
                    setPosition(e) {
                        this.position = e
                    }
                    getSpeed() {
                        return this.speed
                    }
                    setSpeed(e) {
                        this.speed = e
                    }
                    explode() {
                        this.time = 0, this.active = !0, this.uniforms.get("active").value = !0
                    }
                    update(e, t, n) {
                        const i = this.position,
                            r = this.camera,
                            s = this.uniforms,
                            a = s.get("active");
                        if (this.active) {
                            const e = s.get("waveSize").value;
                            r.getWorldDirection(ue), de.copy(r.position).sub(i), a.value = ue.angleTo(de) > ce, a.value && (s.get("cameraDistance").value = r.position.distanceTo(i), ue.copy(i).project(r), this.screenPosition.set(.5 * (ue.x + 1), .5 * (ue.y + 1))), this.time += n * this.speed;
                            const t = this.time - e;
                            s.get("radius").value = t, t >= 2 * (s.get("maxRadius").value + e) && (this.active = !1, a.value = !1)
                        }
                    }
                },
                Ae = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        intensity: t = 1
                    } = {}) {
                        super("SepiaEffect", "uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,vec3(1.0,0.0,0.0)+vec3(-0.607,0.769,0.189)*intensity),dot(inputColor.rgb,vec3(0.0,1.0,0.0)+vec3(0.349,-0.314,0.168)*intensity),dot(inputColor.rgb,vec3(0.0,0.0,1.0)+vec3(0.272,0.534,-0.869)*intensity));outputColor=vec4(color,inputColor.a);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["intensity", new i.Uniform(t)]
                            ])
                        })
                    }
                    get intensity() {
                        return this.uniforms.get("intensity").value
                    }
                    set intensity(e) {
                        this.uniforms.get("intensity").value = e
                    }
                    getIntensity() {
                        return this.intensity
                    }
                    setIntensity(e) {
                        this.intensity = e
                    }
                },
                ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",
                fe = "data:image/png;base64,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",
                ve = {
                    LOW: 0,
                    MEDIUM: 1,
                    HIGH: 2,
                    ULTRA: 3
                },
                pe = class extends U {
                    constructor({
                        preset: e = ve.MEDIUM,
                        edgeDetectionMode: t = c.COLOR,
                        predicationMode: n = u
                    } = {}) {
                        let r, s;
                        super("SMAAEffect", "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", {
                            vertexShader: "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",
                            blendFunction: R.NORMAL,
                            attributes: O | b,
                            uniforms: new Map([
                                ["weightMap", new i.Uniform(null)]
                            ])
                        }), arguments.length > 1 && (r = arguments[0], s = arguments[1], arguments.length > 2 && (e = arguments[2]), arguments.length > 3 && (t = arguments[3])), this.renderTargetEdges = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new C(!0, !1, !1), this.clearPass.overrideClearColor = new i.Color(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new X(new d), this.edgeDetectionMaterial.edgeDetectionMode = t, this.edgeDetectionMaterial.predicationMode = n, this.weightsPass = new X(new f);
                        const a = new i.LoadingManager;
                        a.onLoad = () => {
                            const e = new i.Texture(r);
                            e.name = "SMAA.Search", e.magFilter = i.NearestFilter, e.minFilter = i.NearestFilter, e.generateMipmaps = !1, e.needsUpdate = !0, e.flipY = !0, this.weightsMaterial.searchTexture = e;
                            const t = new i.Texture(s);
                            t.name = "SMAA.Area", t.magFilter = i.LinearFilter, t.minFilter = i.LinearFilter, t.generateMipmaps = !1, t.needsUpdate = !0, t.flipY = !1, this.weightsMaterial.areaTexture = t, this.dispatchEvent({
                                type: "load"
                            })
                        }, a.itemStart("search"), a.itemStart("area"), void 0 !== r && void 0 !== s ? (a.itemEnd("search"), a.itemEnd("area")) : "undefined" !== typeof Image && (r = new Image, s = new Image, r.addEventListener("load", (() => a.itemEnd("search"))), s.addEventListener("load", (() => a.itemEnd("area"))), r.src = ge, s.src = fe), this.applyPreset(e)
                    }
                    get edgesTexture() {
                        return this.renderTargetEdges.texture
                    }
                    getEdgesTexture() {
                        return this.edgesTexture
                    }
                    get weightsTexture() {
                        return this.renderTargetWeights.texture
                    }
                    getWeightsTexture() {
                        return this.weightsTexture
                    }
                    get edgeDetectionMaterial() {
                        return this.edgeDetectionPass.fullscreenMaterial
                    }
                    get colorEdgesMaterial() {
                        return this.edgeDetectionMaterial
                    }
                    getEdgeDetectionMaterial() {
                        return this.edgeDetectionMaterial
                    }
                    get weightsMaterial() {
                        return this.weightsPass.fullscreenMaterial
                    }
                    getWeightsMaterial() {
                        return this.weightsMaterial
                    }
                    setEdgeDetectionThreshold(e) {
                        this.edgeDetectionMaterial.edgeDetectionThreshold = e
                    }
                    setOrthogonalSearchSteps(e) {
                        this.weightsMaterial.orthogonalSearchSteps = e
                    }
                    applyPreset(e) {
                        const t = this.edgeDetectionMaterial,
                            n = this.weightsMaterial;
                        switch (e) {
                            case ve.LOW:
                                t.edgeDetectionThreshold = .15, n.orthogonalSearchSteps = 4, n.diagonalDetection = !1, n.cornerDetection = !1;
                                break;
                            case ve.MEDIUM:
                                t.edgeDetectionThreshold = .1, n.orthogonalSearchSteps = 8, n.diagonalDetection = !1, n.cornerDetection = !1;
                                break;
                            case ve.HIGH:
                                t.edgeDetectionThreshold = .1, n.orthogonalSearchSteps = 16, n.diagonalSearchSteps = 8, n.cornerRounding = 25, n.diagonalDetection = !0, n.cornerDetection = !0;
                                break;
                            case ve.ULTRA:
                                t.edgeDetectionThreshold = .05, n.orthogonalSearchSteps = 32, n.diagonalSearchSteps = 16, n.cornerRounding = 25, n.diagonalDetection = !0, n.cornerDetection = !0
                        }
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {
                        this.edgeDetectionMaterial.depthBuffer = e, this.edgeDetectionMaterial.depthPacking = t
                    }
                    update(e, t, n) {
                        this.clearPass.render(e, this.renderTargetEdges), this.edgeDetectionPass.render(e, t, this.renderTargetEdges), this.weightsPass.render(e, this.renderTargetEdges, this.renderTargetWeights)
                    }
                    setSize(e, t) {
                        this.edgeDetectionMaterial.setSize(e, t), this.weightsMaterial.setSize(e, t), this.renderTargetEdges.setSize(e, t), this.renderTargetWeights.setSize(e, t)
                    }
                    dispose() {
                        const {
                            searchTexture: e,
                            areaTexture: t
                        } = this.weightsMaterial;
                        null !== e && null !== t && (e.dispose(), t.dispose()), super.dispose()
                    }
                    static get searchImageDataURL() {
                        return ge
                    }
                    static get areaImageDataURL() {
                        return fe
                    }
                },
                me = 0,
                we = 1,
                Ee = 2,
                De = 3,
                Be = 4,
                Ce = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        adaptive: t = !0,
                        mode: n = (t ? Ee : we),
                        resolution: r = 256,
                        maxLuminance: s = 16,
                        whitePoint: a = s,
                        middleGrey: o = .6,
                        minLuminance: l = .01,
                        averageLuminance: c = 1,
                        adaptationRate: u = 1
                    } = {}) {
                        super("ToneMappingEffect", "#include <tonemapping_pars_fragment>\nuniform lowp sampler2D luminanceBuffer;uniform float whitePoint;uniform float middleGrey;\n#if TONE_MAPPING_MODE != 2\nuniform float averageLuminance;\n#endif\nvec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=linearToRelativeLuminance(color);\n#if TONE_MAPPING_MODE == 2\nfloat lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));\n#else\nfloat lumAvg=averageLuminance;\n#endif\nfloat lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){\n#if TONE_MAPPING_MODE == 1 || TONE_MAPPING_MODE == 2\noutputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);\n#else\noutputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);\n#endif\n}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["luminanceBuffer", new i.Uniform(null)],
                                ["maxLuminance", new i.Uniform(s)],
                                ["whitePoint", new i.Uniform(a)],
                                ["middleGrey", new i.Uniform(o)],
                                ["averageLuminance", new i.Uniform(c)]
                            ])
                        }), this.renderTargetLuminance = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearMipmapLinearFilter,
                            magFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTargetLuminance.texture.name = "Luminance", this.renderTargetLuminance.texture.generateMipmaps = !0, this.luminancePass = new k({
                            renderTarget: this.renderTargetLuminance
                        }), this.adaptiveLuminancePass = new E(this.luminancePass.texture, {
                            minLuminance: l,
                            adaptationRate: u
                        }), this.uniforms.get("luminanceBuffer").value = this.adaptiveLuminancePass.texture, this.resolution = r, this.mode = n
                    }
                    get mode() {
                        return Number(this.defines.get("TONE_MAPPING_MODE"))
                    }
                    set mode(e) {
                        if (this.mode !== e) {
                            switch (this.defines.clear(), this.defines.set("TONE_MAPPING_MODE", e.toFixed(0)), e) {
                                case me:
                                    this.defines.set("toneMapping(texel)", "ReinhardToneMapping(texel)");
                                    break;
                                case De:
                                    this.defines.set("toneMapping(texel)", "OptimizedCineonToneMapping(texel)");
                                    break;
                                case Be:
                                    this.defines.set("toneMapping(texel)", "ACESFilmicToneMapping(texel)");
                                    break;
                                default:
                                    this.defines.set("toneMapping(texel)", "texel")
                            }
                            this.adaptiveLuminancePass.enabled = e === Ee, this.setChanged()
                        }
                    }
                    getMode() {
                        return this.mode
                    }
                    setMode(e) {
                        this.mode = e
                    }
                    get adaptiveLuminanceMaterial() {
                        return this.adaptiveLuminancePass.fullscreenMaterial
                    }
                    getAdaptiveLuminanceMaterial() {
                        return this.adaptiveLuminanceMaterial
                    }
                    get resolution() {
                        return this.luminancePass.resolution.width
                    }
                    set resolution(e) {
                        const t = Math.max(0, Math.ceil(Math.log2(e))),
                            n = Math.pow(2, t);
                        this.luminancePass.resolution.setPreferredSize(n, n), this.adaptiveLuminanceMaterial.mipLevel1x1 = t
                    }
                    getResolution() {
                        return this.resolution
                    }
                    setResolution(e) {
                        this.resolution = e
                    }
                    get adaptive() {
                        return this.mode === Ee
                    }
                    set adaptive(e) {
                        this.mode = e ? Ee : we
                    }
                    get adaptationRate() {
                        return this.adaptiveLuminanceMaterial.adaptationRate
                    }
                    set adaptationRate(e) {
                        this.adaptiveLuminanceMaterial.adaptationRate = e
                    }
                    get distinction() {
                        return console.warn(this.name, "distinction was removed."), 1
                    }
                    set distinction(e) {
                        console.warn(this.name, "distinction was removed.")
                    }
                    update(e, t, n) {
                        this.adaptiveLuminancePass.enabled && (this.luminancePass.render(e, t), this.adaptiveLuminancePass.render(e, null, null, n))
                    }
                    initialize(e, t, n) {
                        this.adaptiveLuminancePass.initialize(e, t, n)
                    }
                },
                xe = 0,
                Te = 1,
                Ie = class extends U {
                    constructor({
                        blendFunction: e = R.NORMAL,
                        technique: t = xe,
                        eskil: n = !1,
                        offset: r = .5,
                        darkness: s = .5
                    } = {}) {
                        super("VignetteEffect", "uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;\n#if VIGNETTE_TECHNIQUE == 0\nfloat d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));\n#else\nvec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));\n#endif\noutputColor=vec4(color,inputColor.a);}", {
                            blendFunction: e,
                            defines: new Map([
                                ["VIGNETTE_TECHNIQUE", t.toFixed(0)]
                            ]),
                            uniforms: new Map([
                                ["offset", new i.Uniform(r)],
                                ["darkness", new i.Uniform(s)]
                            ])
                        })
                    }
                    get technique() {
                        return Number(this.defines.get("VIGNETTE_TECHNIQUE"))
                    }
                    set technique(e) {
                        this.technique !== e && (this.defines.set("VIGNETTE_TECHNIQUE", e.toFixed(0)), this.setChanged())
                    }
                    get eskil() {
                        return this.technique === Te
                    }
                    set eskil(e) {
                        this.technique = e ? Te : xe
                    }
                    getTechnique() {
                        return this.technique
                    }
                    setTechnique(e) {
                        this.technique = e
                    }
                    get offset() {
                        return this.uniforms.get("offset").value
                    }
                    set offset(e) {
                        this.uniforms.get("offset").value = e
                    }
                    getOffset() {
                        return this.offset
                    }
                    setOffset(e) {
                        this.offset = e
                    }
                    get darkness() {
                        return this.uniforms.get("darkness").value
                    }
                    set darkness(e) {
                        this.uniforms.get("darkness").value = e
                    }
                    getDarkness() {
                        return this.darkness
                    }
                    setDarkness(e) {
                        this.darkness = e
                    }
                };
            new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 1, 0]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 0, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 0, 1]), new Float32Array([1, 0, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 1, 0]), new Float32Array([1, 1, 0]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 1, 0]), new Float32Array([0, 1, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 0, 1]), new Float32Array([0, 1, 1]), new Float32Array([1, 1, 1]);
            new Float32Array(2), new Float32Array(2), new Float32Array([0, -.25, .25, -.125, .125, -.375, .375]), new Float32Array([0, 0]), new Float32Array([.25, -.25]), new Float32Array([-.25, .25]), new Float32Array([.125, -.125]), new Float32Array([-.125, .125]), new Uint8Array([0, 0]), new Uint8Array([3, 0]), new Uint8Array([0, 3]), new Uint8Array([3, 3]), new Uint8Array([1, 0]), new Uint8Array([4, 0]), new Uint8Array([1, 3]), new Uint8Array([4, 3]), new Uint8Array([0, 1]), new Uint8Array([3, 1]), new Uint8Array([0, 4]), new Uint8Array([3, 4]), new Uint8Array([1, 1]), new Uint8Array([4, 1]), new Uint8Array([1, 4]), new Uint8Array([4, 4]), new Uint8Array([0, 0]), new Uint8Array([1, 0]), new Uint8Array([0, 2]), new Uint8Array([1, 2]), new Uint8Array([2, 0]), new Uint8Array([3, 0]), new Uint8Array([2, 2]), new Uint8Array([3, 2]), new Uint8Array([0, 1]), new Uint8Array([1, 1]), new Uint8Array([0, 3]), new Uint8Array([1, 3]), new Uint8Array([2, 1]), new Uint8Array([3, 1]), new Uint8Array([2, 3]), new Uint8Array([3, 3]);
            Me(0, 0, 0, 0), new Float32Array([0, 0, 0, 0]), Me(0, 0, 0, 1), new Float32Array([0, 0, 0, 1]), Me(0, 0, 1, 0), new Float32Array([0, 0, 1, 0]), Me(0, 0, 1, 1), new Float32Array([0, 0, 1, 1]), Me(0, 1, 0, 0), new Float32Array([0, 1, 0, 0]), Me(0, 1, 0, 1), new Float32Array([0, 1, 0, 1]), Me(0, 1, 1, 0), new Float32Array([0, 1, 1, 0]), Me(0, 1, 1, 1), new Float32Array([0, 1, 1, 1]), Me(1, 0, 0, 0), new Float32Array([1, 0, 0, 0]), Me(1, 0, 0, 1), new Float32Array([1, 0, 0, 1]), Me(1, 0, 1, 0), new Float32Array([1, 0, 1, 0]), Me(1, 0, 1, 1), new Float32Array([1, 0, 1, 1]), Me(1, 1, 0, 0), new Float32Array([1, 1, 0, 0]), Me(1, 1, 0, 1), new Float32Array([1, 1, 0, 1]), Me(1, 1, 1, 0), new Float32Array([1, 1, 1, 0]), Me(1, 1, 1, 1), new Float32Array([1, 1, 1, 1]);

            function ye(e, t, n) {
                return e + (t - e) * n
            }

            function Me(e, t, n, i) {
                const r = ye(e, t, .75),
                    s = ye(n, i, .75);
                return ye(r, s, .875)
            }
            var Se = class extends i.Loader {
                    load(e, t = (() => {}), n = (() => {}), r = null) {
                        const s = this.manager,
                            a = new i.LoadingManager,
                            o = new i.FileLoader(a);
                        return o.setPath(this.path), o.setResponseType("text"), new Promise(((i, l) => {
                            a.onError = e => {
                                s.itemError(e), null !== r ? (r(`Failed to load ${e}`), i()) : l(`Failed to load ${e}`)
                            }, s.itemStart(e), o.load(e, (n => {
                                try {
                                    const r = this.parse(n);
                                    s.itemEnd(e), t(r), i(r)
                                } catch (r) {
                                    console.error(r), a.onError(e)
                                }
                            }), n)
                        }))
                    }
                    parse(e) {
                        const t = /^([\d.]+) +([\d.]+) +([\d.]+) *$/gm;
                        let n = /TITLE +"([^"]*)"/.exec(e);
                        const r = null !== n ? n[1] : null;
                        if (n = /LUT_3D_SIZE +(\d+)/.exec(e), null === n) throw new Error("Missing LUT_3D_SIZE information");
                        const s = Number(n[1]),
                            a = new Float32Array(s ** 3 * 4),
                            o = new i.Vector3(0, 0, 0),
                            l = new i.Vector3(1, 1, 1);
                        if (n = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/.exec(e), null !== n && o.set(Number(n[1]), Number(n[2]), Number(n[3])), n = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/.exec(e), null !== n && l.set(Number(n[1]), Number(n[2]), Number(n[3])), o.x > l.x || o.y > l.y || o.z > l.z) throw o.set(0, 0, 0), l.set(1, 1, 1), new Error("Invalid input domain");
                        let c = 0;
                        for (; null !== (n = t.exec(e));) a[c++] = Number(n[1]), a[c++] = Number(n[2]), a[c++] = Number(n[3]), a[c++] = 1;
                        const u = new se(a, s, s, s);
                        return u.domainMin.copy(o), u.domainMax.copy(l), null !== r && (u.name = r), u
                    }
                },
                Re = class extends i.Loader {
                    load(e = (() => {}), t = null) {
                        4 === arguments.length ? (e = arguments[1], t = arguments[3]) : 3 !== arguments.length && "function" === typeof arguments[0] || (e = arguments[1], t = null);
                        const n = this.manager,
                            r = new i.LoadingManager;
                        return new Promise(((i, s) => {
                            const a = new Image,
                                o = new Image;
                            r.onError = e => {
                                n.itemError(e), null !== t ? (t(`Failed to load ${e}`), i()) : s(`Failed to load ${e}`)
                            }, r.onLoad = () => {
                                const t = [a, o];
                                e(t), i(t)
                            }, a.addEventListener("error", (e => {
                                r.itemError("smaa-search")
                            })), o.addEventListener("error", (e => {
                                r.itemError("smaa-area")
                            })), a.addEventListener("load", (() => {
                                n.itemEnd("smaa-search"), r.itemEnd("smaa-search")
                            })), o.addEventListener("load", (() => {
                                n.itemEnd("smaa-area"), r.itemEnd("smaa-area")
                            })), n.itemStart("smaa-search"), n.itemStart("smaa-area"), r.itemStart("smaa-search"), r.itemStart("smaa-area"), a.src = ge, o.src = fe
                        }))
                    }
                }
        }
    }
]);
//# sourceMappingURL=4bdf9057-1fd17ba8be36bbd2.js.map