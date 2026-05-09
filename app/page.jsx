const services = [
  {
    icon: "洗",
    title: "温和洗护",
    description:
      "分区冲洗、低敏浴液、恒温吹干，适合日常清洁和敏感皮肤宠物。"
  },
  {
    icon: "剪",
    title: "精修造型",
    description:
      "圆脸、泰迪装、实用短毛、季节造型，由美容师按骨架和毛流修剪。"
  },
  {
    icon: "护",
    title: "皮毛护理",
    description:
      "去浮毛、开结、护爪、耳道清洁和毛发柔顺护理，减少打结和异味。"
  },
  {
    icon: "猫",
    title: "猫咪专区",
    description:
      "独立安静时段、低噪吹水、熟悉气味毛巾，降低猫咪洗护压力。"
  }
];

const packages = [
  {
    title: "基础洁净",
    price: "¥88",
    featured: false,
    features: ["基础洗澡与吹干", "耳道清洁", "脚底毛与肛门腺护理"],
    cta: "预约基础套餐"
  },
  {
    title: "精致养护",
    price: "¥168",
    featured: true,
    features: ["全套洗护流程", "局部修剪与护爪", "去浮毛和柔顺护理"],
    cta: "预约热门套餐"
  },
  {
    title: "造型焕新",
    price: "¥268",
    featured: false,
    features: ["美容师定制造型", "精修脸部和身体线条", "洗后照片与养护建议"],
    cta: "预约造型套餐"
  }
];

const reviews = [
  {
    quote:
      "我家狗很怕吹风，这里会分段吹干，中途还让它休息，回家没有应激。",
    author: "可乐家长 · 柯基"
  },
  {
    quote:
      "猫咪第一次在外面洗澡，店员动作很轻，透明窗能看到进度，放心很多。",
    author: "芝麻家长 · 银渐层"
  },
  {
    quote:
      "修出来的脸型很自然，也会提醒耳朵和皮肤状态，感觉不是只做表面功夫。",
    author: "糯米家长 · 比熊"
  }
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="泡泡爪印首页">
          <span className="brand-mark">爪</span>
          <span>泡泡爪印宠物洗护</span>
        </a>
        <nav aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#care">护理标准</a>
          <a href="#pricing">套餐</a>
          <a href="#reviews">口碑</a>
        </nav>
        <a className="nav-action" href="#booking">
          立即预约
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="泡泡爪印宠物洗护店">
          <div className="hero-copy">
            <p className="eyebrow">小型犬、中大型犬与猫咪友好门店</p>
            <h1>泡泡爪印宠物洗护</h1>
            <p>
              低压安抚洗护、皮毛分型护理、透明可见流程，让每一次洗澡都更温和、更安心。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                预约到店
              </a>
              <a className="btn btn-secondary" href="#pricing">
                查看套餐
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <p className="section-label">Our Services</p>
            <h2>从基础清洁到造型养护，一次安排妥当</h2>
            <p>
              根据宠物年龄、毛量、皮肤状态和性格制定护理节奏，拒绝流水线式赶工。
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="icon-box" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="care">
          <div className="photo-stack" aria-label="宠物洗护环境照片">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"
              alt="两只干净的小狗在户外休息"
            />
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80"
              alt="宠物美容师照顾狗狗"
            />
          </div>
          <div>
            <p className="section-label">Care Standard</p>
            <h2>洗护不是把毛吹干，而是让宠物愿意下次再来</h2>
            <p>
              我们把情绪观察放在流程前面：先熟悉环境，再开始清洁；一旦宠物出现明显紧张，会暂停安抚。
            </p>
            <ul className="check-list">
              <li>
                <span>1</span>
                <div>每只宠物使用独立消毒工具，毛巾和围脖一客一换。</div>
              </li>
              <li>
                <span>2</span>
                <div>
                  洗前检查皮肤、耳朵、指甲和毛结，异常情况会提前沟通。
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  开放式等候区可看到护理进度，完成后提供护理建议。
                </div>
              </li>
            </ul>
            <a className="btn btn-primary" href="#booking">
              安排一次舒适洗护
            </a>
          </div>
        </section>

        <section className="section pricing-band" id="pricing">
          <div className="section-head">
            <p className="section-label">Packages</p>
            <h2>清晰套餐，按体型与毛量确认最终价格</h2>
            <p>
              以下为常见起步价；特殊开结、重度掉毛、攻击性或医疗护理需求会到店评估。
            </p>
          </div>
          <div className="price-grid">
            {packages.map((item) => (
              <article
                className={`price-card${item.featured ? " featured" : ""}`}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <div className="price">
                  {item.price} <small>起</small>
                </div>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="btn" href="#booking">
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80"
            alt="干净开心的金毛犬"
          />
          <div>
            <div className="section-head">
              <p className="section-label">Reviews</p>
              <h2>附近宠物家长常来的原因</h2>
            </div>
            <div className="review-list">
              {reviews.map((review) => (
                <article className="review" key={review.author}>
                  <div className="stars" aria-label="五星评价">
                    ★★★★★
                  </div>
                  <p>{review.quote}</p>
                  <strong>{review.author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section booking" id="booking">
          <div>
            <div className="section-head">
              <p className="section-label">Booking</p>
              <h2>给毛孩子约一个轻松的洗护时间</h2>
              <p>
                提交后门店会在营业时间内联系确认体型、毛量和可预约时段。
              </p>
            </div>
            <div className="info-panel">
              <div className="info-row">
                <span>营业时间</span>
                <strong>10:00 - 20:00</strong>
              </div>
              <div className="info-row">
                <span>门店电话</span>
                <strong>138 0000 8899</strong>
              </div>
              <div className="info-row">
                <span>门店地址</span>
                <strong>上海市暖心路 88 号</strong>
              </div>
            </div>
          </div>
          <form>
            <label>
              家长姓名
              <input type="text" name="name" placeholder="请输入姓名" />
            </label>
            <label>
              到店时间
              <select name="arrivalTime" defaultValue="今天 10:00 - 12:00">
                <option>今天 10:00 - 12:00</option>
                <option>今天 12:00 - 14:00</option>
                <option>今天 14:00 - 16:00</option>
                <option>今天 16:00 - 18:00</option>
                <option>今天 18:00 - 20:00</option>
              </select>
            </label>
            <label>
              联系电话
              <input type="tel" name="phone" placeholder="请输入手机号" />
            </label>
            <label>
              宠物类型
              <select name="pet" defaultValue="小型犬">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他宠物</option>
              </select>
            </label>
            <label>
              预约项目
              <select name="service" defaultValue="基础洁净">
                <option>基础洁净</option>
                <option>精致养护</option>
                <option>造型焕新</option>
                <option>到店评估</option>
              </select>
            </label>
            <label className="full">
              备注
              <textarea
                name="message"
                placeholder="例如体重、毛结情况、是否怕吹风"
              />
            </label>
            <button className="btn full" type="button">
              提交预约
            </button>
          </form>
        </section>
      </main>

      <footer>
        <span>© 2026 泡泡爪印宠物洗护店</span>
        <span>温柔洗护 · 透明流程 · 猫狗友好</span>
      </footer>
    </>
  );
}
