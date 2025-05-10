import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white to-[#e8eeef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black/80 mb-4">تواصل معنا</h2>
          <p className="text-lg text-black/70">
            نحن هنا لمساعدتك في كل ما تحتاجه
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black/80 mb-6">
              معلومات الاتصال
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaPhone className="w-6 h-6 text-[#2c5364] mt-1" />
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-black/80">
                    الهاتف
                  </h4>
                  <p className="text-black/70">+20 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="w-6 h-6 text-[#2c5364] mt-1" />
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-black/80">
                    البريد الإلكتروني
                  </h4>
                  <p className="text-black/70">info@dentalclinic.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-6 h-6 text-[#2c5364] mt-1" />
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-black/80">
                    العنوان
                  </h4>
                  <p className="text-black/70">
                    123 شارع الأسنان، القاهرة، مصر
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="w-6 h-6 text-[#2c5364] mt-1" />
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-black/80">
                    ساعات العمل
                  </h4>
                  <p className="text-black/70">
                    السبت - الخميس: 9 صباحاً - 9 مساءً
                  </p>
                  <p className="text-black/70">الجمعة: 2 مساءً - 9 مساءً</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black/80 mb-6">
              أرسل لنا رسالة
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black/70 mb-1"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black/70 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black/70 mb-1"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                  placeholder="اكتب رسالتك هنا"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white py-3 px-6 rounded-md hover:from-[#0f2027] hover:to-[#203a43] transition-all"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
